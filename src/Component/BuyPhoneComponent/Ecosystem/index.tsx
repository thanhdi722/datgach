"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { Spin } from "antd";

export interface Product {
  id: number;
  name: string;
  url_key: string;
  image: {
    url: string;
  };
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
  image {
    url
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
      eq: "MzIz",
    },
  },
  pageSize: 200,
  currentPage: 1,
};

async function fetchEcosystemData() {
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

const Ecosystem: React.FC = () => {
  const { data, error, isLoading } = useQuery<Product[]>({
    queryKey: ["ecosystemData"],
    queryFn: fetchEcosystemData,
    staleTime: 300000,
  });

  const [activeTab, setActiveTab] = useState<string>("Tất cả");
  const [filteredData, setFilteredData] = useState<Product[]>([]);

  useEffect(() => {
    if (activeTab === "Tất cả") {
      setFilteredData(data || []);
    } else {
      const filtered = data?.filter((product) =>
        product.name.toLowerCase().includes(activeTab.toLowerCase())
      );
      setFilteredData(filtered || []);
    }
  }, [activeTab, data]);

  if (isLoading) {
    return (
      <div className="loading">
        <Spin />
      </div>
    );
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  const tabs = [
    "Tất cả",
    "Apple Watch",
    "AirPods",
    "Cáp Sạc",
    "Ốp Lưng",
    "Bộ Kính Dán",
  ];

  return (
    <div className="ecosystem">
      <div className="upgrade-list">
        <div className="container">
          <div className="upgrade">
            <div className="upgrade-header">
              <h3 className="upgrade-header-tt">Hệ sinh thái Apple</h3>
            </div>

            <div className="tabs">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={activeTab === tab ? "tab active" : "tab"}
                  style={{
                    color: activeTab === tab ? "white" : "#000",
                    backgroundColor: activeTab === tab ? "#ef373e" : "#f1f1f1",
                    border:
                      activeTab === tab
                        ? "1px solid #ef373e"
                        : "1px solid #ccc",
                    padding: "10px 20px",
                    margin: "5px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            <Swiper
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView="auto"
              speed={1000}
              navigation
              breakpoints={{
                300: {
                  slidesPerView: 2,
                },
                576: {
                  slidesPerView: 3,
                },
                850: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 5,
                },
              }}
            >
              {filteredData.map((product, index) => (
                <SwiperSlide key={index}>
                  <Link
                    href={`https://bachlongmobile.com/products/${product.url_key}`}
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div className="upgrade-item">
                      <div className="upgrade-item-img">
                        <Image
                          src={product.image.url}
                          width={1400}
                          height={1200}
                          quality={100}
                          alt={`product-${index}`}
                        />
                      </div>
                      <div className="upgrade-item-content">
                        <h4 className="upgrade-item-content-tt">
                          {product.name}
                        </h4>
                        <div className="upgrade-item-content-body">
                          <span className="upgrade-item-content-body-tt">
                            Giá:{" "}
                          </span>
                          <div className="upgrade-item-content-body-price">
                            {product.price_range.minimum_price.final_price.value.toLocaleString(
                              "vi-VN"
                            )}{" "}
                            {
                              product.price_range.minimum_price.final_price
                                .currency
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;
