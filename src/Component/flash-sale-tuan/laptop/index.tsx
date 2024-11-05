"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { Spin } from "antd";
import DecorProduct from "../../../../public/flase-sale/IC-DECOR.png";
import DecorWomen from "../../../../public/flase-sale/PC_Laptop.png";
import FrameProduct from "../../../../public/flase-sale/f1.png";
import "./apple.scss";
import { useProductSaleData } from "../../../app/hooks/useProductSaleData";
import DecorProduct2 from "../../../../public/halloween/ICON-DRAGON.png";
export interface Product {
  id: number;
  name: string;
  url_key: string;
  image: {
    url: string;
  };
  attributes: any;
  price_range: {
    minimum_price: {
      final_price: {
        value: number;
        currency: string;
      };
    };
  };
}

const query = `
 query getProducts(
  $search: String
  $filter: ProductAttributeFilterInput
  $sort: ProductAttributeSortInput
  $pageSize: Int
  $currentPage: Int
) {
  products(
    search: $search
    filter: $filter
    sort: $sort
    pageSize: $pageSize
    currentPage: $currentPage
  ) {
    items {
      ...ProductInterfaceField
    }
  }
}
fragment ProductInterfaceField on ProductInterface {
  name
  url_key
  image {
    url
  }
  attributes {
    attribute_code
    value
  }
  price_range {
    minimum_price {
      final_price {
        value
        currency
      }
    }
  }
}
`;

const variables = {
  filter: {
    category_uid: {
      eq: "Mzgx",
    },
  },
  pageSize: 200,
  currentPage: 1,
};

async function fetchProductListData() {
  const response = await fetch("https://beta-api.bachlongmobile.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const data = await response.json();
  return data.data.products.items as Product[];
}

const LaptopList: React.FC = () => {
  const {
    data: dataLaptop,
    error,
    isLoading,
  } = useQuery<Product[]>({
    queryKey: ["productLaptop"],
    queryFn: fetchProductListData,
    staleTime: 300000,
  });

  const { data } = useProductSaleData();
  const productSale = data?.[0]?.items;

  const productSaleNames = productSale?.map(
    (productSale: any) => productSale.product.name
  );
  const productSalePrices = productSale?.map(
    (productSale: any) => productSale.sale_price
  );

  const getProductSalePrice = (productName: string, originalPrice: number) => {
    if (productSaleNames && productSalePrices) {
      const saleIndex = productSaleNames.findIndex(
        (name: string) => name === productName
      );
      if (saleIndex !== -1) {
        return productSalePrices[saleIndex].toLocaleString("vi-VN");
      }
    }
    return originalPrice.toLocaleString("vi-VN");
  };

  const [activeTab, setActiveTab] = useState<string>("");
  const [filteredData, setFilteredData] = useState<Product[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(10);

  useEffect(() => {
    let filtered = dataLaptop || [];

    if (activeTab === "Phụ Kiện") {
      filtered =
        dataLaptop?.filter((product) => {
          const hasAccessoryAttribute = product.attributes.some(
            (attr: any) => attr.value === "Phụ Kiện"
          );
          return product.name.includes("Phụ Kiện") || hasAccessoryAttribute;
        }) || [];
    } else {
      filtered =
        dataLaptop?.filter((product) => {
          const matchesTab =
            activeTab === "iPhone 16"
              ? product.name.startsWith("iPhone 16") &&
                !product.name.includes("Plus") &&
                !product.name.includes("Pro")
              : product.name.includes(activeTab);

          return matchesTab;
        }) || [];
    }

    setFilteredData(filtered);

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(4);
      } else {
        setVisibleCount(10);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dataLaptop, activeTab]);

  if (isLoading) {
    return (
      <div className="container-spin">
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  const visibleProducts = filteredData.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  return (
    <div
      className="product-list-sale"
      style={
        {
          // background: 'linear-gradient(180deg, #5D0069 0, var(--bg-gradient-white, #15001B) 90%)',
        }
      }
    >
      <div>
        <div className="upgrade-list">
          <div className="container">
            <div
              style={{
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <div style={{ padding: "10px" }}>
                <div className="women-decor" style={{ paddingBottom: "20px" }}>
                  <Image
                    src={DecorWomen}
                    width={1920}
                    height={1200}
                    alt="product-banner-01"
                    className=""
                  />
                </div>

                <div className="upgrade">
                  {visibleProducts.map((product, index) => (
                    <Link
                      key={index}
                      href={`https://bachlongmobile.com/products/${product.url_key}`}
                      passHref
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <div className="upgrade-item">
                        <div className="upgrade-item-header">
                          {/* <Image
                            src={DecorProduct}
                            width={80}
                            height={80}
                            quality={100}
                            alt="decor-product"
                            className="decor-product"
                          /> */}
                          {/* <Image
                            src={DecorProduct2}
                            width={80}
                            height={80}
                            quality={100}
                            alt="decor-product"
                            className="decor-product2"
                          /> */}
                          <span></span>
                          {/* Only show "Trả góp 0%" if the product price is greater than 3,000,000 */}
                          {product.price_range.minimum_price.final_price.value >
                            3000000 && (
                            <span className="percent">Trả góp 0%</span>
                          )}
                        </div>
                        <div className="upgrade-item-img">
                          <div className="img-content">
                            <Image
                              src={product.image.url}
                              width={1400}
                              height={1200}
                              quality={100}
                              alt={`product-${index}`}
                            />
                          </div>
                          <div className="frame-product">
                            <Image
                              src={FrameProduct}
                              width={500}
                              height={500}
                              quality={100}
                              alt="frame-product"
                            />
                          </div>
                        </div>
                        <div className="upgrade-item-content">
                          <h4 className="upgrade-item-content-tt">
                            {product.name}
                          </h4>
                          <div className="upgrade-item-content-body">
                            <div className="upgrade-item-content-body-price">
                              {getProductSalePrice(
                                product.name,
                                product.price_range.minimum_price.final_price
                                  .value
                              )}{" "}
                              {
                                product.price_range.minimum_price.final_price
                                  .currency
                              }
                            </div>
                            <div className="upgrade-item-content-body-reduced">
                              <div className="price-reduced">
                                {product.attributes &&
                                product.attributes[0]?.value
                                  ? Number(
                                      product.attributes[0].value
                                    ).toLocaleString("vi-VN")
                                  : ""}{" "}
                                {product.attributes[0].value &&
                                  product.price_range.minimum_price.final_price
                                    .currency}
                              </div>

                              {product.attributes[0].value && (
                                <div className="percent">
                                  -
                                  {Math.ceil(
                                    ((product.attributes[0].value -
                                      product.price_range.minimum_price
                                        .final_price.value) /
                                      product.attributes[0].value) *
                                      100
                                  )}
                                  %
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                {visibleCount < filteredData.length && (
                  <div style={{ textAlign: "center", marginTop: "20px" }}>
                    <button
                      onClick={loadMore}
                      style={{
                        backgroundColor: "#ff7518",
                        color: "white",
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Xem thêm
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopList;
