"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { Spin } from "antd";
import DecorProduct from "../../../../public/flase-sale/IC-DECOR.png";
import DecorWomen from "../../../../public/flase-sale/PC_phukienapple.png";
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
interface BannerItem {
  banner_id: number;
  caption: string;
  link: string;
  media: string;
  media_alt: string;
  name: string;
  slider_id: number;
}

interface Banner {
  __typename: string;
  items: BannerItem[];
  page_info: {
    current_page: number;
    page_size: number;
    total_pages: number;
  };
}

interface SliderItem {
  title: string;
  identifier: string;
  Banner: Banner;
}

interface SliderData {
  Slider: {
    items: SliderItem[];
    total_count: number;
  };
}

interface ApiResponse {
  data: SliderData;
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
      eq: "Mzg2",
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

const ToyList: React.FC = () => {
  const {
    data: DataToy,
    error,
    isLoading,
  } = useQuery<Product[]>({
    queryKey: ["productToy"],
    queryFn: fetchProductListData,
    staleTime: 300000,
  });

  const { data } = useProductSaleData();
  const filteredDatassss = data?.filter(
    (item: any) => item.title === "SP Phụ Kiện"
  );
  // const filteredIphones = filteredDatassss?.[0]?.items.filter(
  //   (product: any) => {
  //     // Kiểm tra nếu tên sản phẩm chứa từ "iPhone"
  //     return product.product.name.toLowerCase().includes("iphone");
  //   }
  // );

  // Hiển thị các sản phẩm đã lọc

  console.log("dataaaaaaaaaaaaaaaaaa", filteredDatassss);
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

  const [filteredData, setFilteredData] = useState<Product[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(10);
  const [dataTitle, setDataTitle] = useState<ApiResponse | null>(null);
  const fetchBannerHeader = async () => {
    try {
      const response = await fetch(
        "https://beta-api.bachlongmobile.com/graphql",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `
                  query getSlider($filter: SliderFilterInput) {
                    Slider(filter: $filter) {
                      items {
                        title
                        identifier
                        Banner {
                          __typename
                          items {
                            banner_id
                            caption
                            link
                            media
                            media_alt
                            name
                            slider_id
                          }
                          page_info {
                            current_page
                            page_size
                            total_pages
                          }
                        }
                      }
                      total_count
                    }
                  }
                `,
            variables: {
              filter: {
                identifier: {
                  eq: "banner-page-flash-sale-tuan",
                },
              },
            },
          }),
        }
      );

      const result = await response.json();
      setDataTitle(result);
    } catch (err) {}
  };
  useEffect(() => {
    fetchBannerHeader();
  }, []);
  useEffect(() => {
    let filtered = DataToy || [];
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
  }, [DataToy]);

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
          // background: 'linear-gradient(180deg, #15001B 0, var(--bg-gradient-white, #5D0069) 90%)',
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
                  {dataTitle ? (
                    dataTitle?.data?.Slider?.items[0]?.Banner?.items
                      .filter((item) =>
                        item.name.includes("title phụ kiện flash sale tuần")
                      )
                      .map((item, index) => (
                        <div key={index}>
                          <img
                            src={item.media || ""}
                            alt={`privilege-${index + 1}`}
                          />
                        </div>
                      ))
                  ) : (
                    <Spin>
                      <div style={{ width: 200, height: 200 }} />
                    </Spin>
                  )}
                </div>

                <div className="upgrade">
                  {filteredDatassss && filteredDatassss.length > 0 ? (
                    filteredDatassss?.[0]?.items.map(
                      (product: any, index: number) => (
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
                              <span></span>
                            </div>
                            <div className="upgrade-item-img">
                              <div className="img-content">
                                <Image
                                  src={product?.product?.image?.url}
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
                                {product?.product?.name}
                              </h4>
                              <div className="upgrade-item-content-body">
                                <div className="upgrade-item-content-body-price">
                                  {product?.sale_price?.toLocaleString("vi-VN")}{" "}
                                  VND
                                </div>
                                <div className="upgrade-item-content-body-reduced">
                                  <div className="price-reduced">
                                    {Number(
                                      product?.price_original
                                    )?.toLocaleString("vi-VN")}
                                    VND
                                  </div>
                                  <div className="percent">
                                    -
                                    {Math.ceil(
                                      100 -
                                        (product.sale_price /
                                          product.price_original) *
                                          100
                                    )}
                                    %
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      )
                    )
                  ) : (
                    <Spin>
                      <div style={{ width: 200, height: 200 }} />
                    </Spin>
                  )}
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

export default ToyList;
