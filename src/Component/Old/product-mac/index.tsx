"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { Spin } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./product-mac.scss";
/* eslint-disable @typescript-eslint/no-explicit-any */

export interface Product {
  id: number;
  name: string;
  url_key: string;
  image: {
    url: string;
  };
  image_banner: string;
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
  id
  name
  url_key
  image { url }
  image_banner
  price_range { minimum_price { final_price { value currency } } }
  attributes {
    attribute_code
    value
  }
}
`;

const variables = {
  filter: {
    category_uid: { eq: "NTk=" },
  },
  pageSize: 200,
  currentPage: 1,
};

async function fetchProductListData() {
  const response = await fetch("https://beta-api.bachlongmobile.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });

  const data = await response.json();
  return data.data.products.items as Product[];
}

const ProductMac: React.FC = () => {
  const { data, error, isLoading } = useQuery<Product[]>({
    queryKey: ["productMacData"],
    queryFn: fetchProductListData,
    staleTime: 300000,
  });

  const [visibleCount, setVisibleCount] = useState<number>(10);

  useEffect(() => {
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
  }, []);

  if (isLoading) {
    return (
      <div className="loading container-spin">
        <Spin />
      </div>
    );
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  const visibleProducts = data?.slice(0, visibleCount) || [];

  return (
    <div className="product-list">
      <div className="container">
        <div className="upgrade-list bg-04">
          <div className="upgrade-list-tt">
            <span>Mac</span>
          </div>
          <Swiper
            spaceBetween={16}
            slidesPerView="auto"
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              350: { slidesPerView: 2 },
              850: { slidesPerView: 3 },
              1200: { slidesPerView: 5 },
            }}
            className="swiper upgrade"
          >
            {visibleProducts.map((product, index) => (
              <SwiperSlide key={index}>
                <Link
                  href={`https://bachlongmobile.com/products/${product.url_key}`}
                  passHref
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="upgrade-item">
                    <div className="upgrade-item-header">
                      <div className="percent">
                        <span>Trả góp 0%</span>
                      </div>
                      {product.attributes[0]?.value && (
                        <div className="percent-sale">
                          <span>
                            -
                            {Math.ceil(
                              ((product.attributes[0].value -
                                product.price_range.minimum_price.final_price
                                  .value) /
                                product.attributes[0].value) *
                                100
                            )}
                            %
                          </span>
                        </div>
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
                      {product.image_banner && (
                        <div className="frame-product">
                          <Image
                            src={product.image_banner}
                            width={500}
                            height={500}
                            quality={100}
                            alt="frame-product"
                          />
                        </div>
                      )}
                    </div>
                    <div className="upgrade-item-content">
                      <h4 className="upgrade-item-content-tt">
                        {product.name}
                      </h4>
                      <div className="upgrade-item-content-body">
                        <div className="upgrade-item-content-body-price">
                          {product.price_range.minimum_price.final_price.value.toLocaleString(
                            "vi-VN"
                          )}{" "}
                          {
                            product.price_range.minimum_price.final_price
                              .currency
                          }
                        </div>
                        <div className="upgrade-item-content-body-reduced">
                          <div className="price-reduced">
                            {product.attributes[0]?.value
                              ? Number(
                                  product.attributes[0].value
                                ).toLocaleString("vi-VN")
                              : ""}{" "}
                            {product.attributes[0]?.value &&
                              product.price_range.minimum_price.final_price
                                .currency}
                          </div>
                        </div>
                      </div>
                      <div className="upgrade-wrap-footer">
                        <div className="upgrade-hot-footer">
                          Giá thu bằng giá bán - Trợ giá lên đến 100%
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          {visibleCount < (data?.length || 0) && (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <button
                onClick={() => setVisibleCount(visibleCount + 5)}
                className="button"
              >
                <span className="button-content">Xem thêm</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductMac;
