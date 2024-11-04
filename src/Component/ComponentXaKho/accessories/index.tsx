"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import DecorWomen from "../../../../public/halloween/decor-women-07.png";
import Access20k from "../accessories-halloween/acess-20k/index";
import Access110 from "../accessories-halloween/acess-110/index";
import Access210 from "../accessories-halloween/acess-210/index";
import Access310 from "../accessories-halloween/acess-310/index";
import AccessTo210 from "../accessories-halloween/acess-to210/index";
import Access290 from "../accessories-halloween/acess-290/index";
import "./product.scss";
import "swiper/css";
import imagesTitle from "../../../../public/warehouse-discharge/phukien.png";
import { Spin } from "antd";

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
const AccessoriesList: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [disabledTabs, setDisabledTabs] = useState<number[]>([]);

  const tabs = [
    {
      index: 0,
      name: (
        <span>
          SAMSUNG <br />{" "}
          <span style={{ fontSize: "1.2rem", fontWeight: "600" }}>
            GIÁ TỪ 20K
          </span>
        </span>
      ),
      component: <Access20k />,
    },
    {
      index: 1,
      name: (
        <span>
          IPHONE 13 SERIES <br />{" "}
          <span style={{ fontSize: "1.2rem", fontWeight: "600" }}>
            GIÁ TỪ 110,000
          </span>
        </span>
      ),
      component: <Access110 />,
    },
    {
      index: 2,
      name: (
        <span>
          IPHONE 14 SERIES <br />{" "}
          <span style={{ fontSize: "1.2rem", fontWeight: "600" }}>
            GIÁ TỪ 210,000
          </span>
        </span>
      ),
      component: <Access210 />,
    },
    {
      index: 3,
      name: (
        <span>
          IPHONE 15 SERIES <br />{" "}
          <span style={{ fontSize: "1.2rem", fontWeight: "600" }}>
            GIÁ TỪ 310,000
          </span>
        </span>
      ),
      component: <Access310 />,
    },
    {
      index: 4,
      name: (
        <span>
          PIN DỰ PHÒNG <br />{" "}
          <span style={{ fontSize: "1.2rem", fontWeight: "600" }}>
            GIÁ TỪ 210.000
          </span>
        </span>
      ),
      component: <AccessTo210 />,
    },
    {
      index: 5,
      name: (
        <span>
          CÓC /CÁP SẠC <br />{" "}
          <span style={{ fontSize: "1.2rem", fontWeight: "600" }}>
            GIÁ TỪ 290.000
          </span>
        </span>
      ),
      component: <Access290 />,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
                  eq: "banner-page-xa-kho",
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
  return (
    <div className="product-list-warehouse-discharge">
      <div className="container">
        <div
          style={{
            padding: "10px",
            borderRadius: "10px",
            backgroundColor: "#ffe150",
          }}
        >
          {dataTitle ? (
            dataTitle?.data?.Slider?.items[0]?.Banner?.items
              .filter((item) =>
                item.name.includes("title sản phẩm phụ kiện 90 page xả kho")
              )
              .map((item, index) => (
                <div key={index}>
                  <img
                    src={item.media || ""}
                    alt={`privilege-${index + 1}`}
                    style={{ padding: "0px 10px 20px 10px" }}
                  />
                </div>
              ))
          ) : (
            <Spin>
              <div style={{ width: 200, height: 200 }} />
            </Spin>
          )}
          <div className="upgrade-list">
            {/* <div className="women-decor">
            <Image
              src={DecorWomen}
              width={1400}
              height={1200}
              quality={100}
              priority
              alt="product-banner-07"
              sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw, (min-width: 1200px) 33vw"
            />
          </div> */}

            {isMobile ? (
              <Swiper spaceBetween={10} slidesPerView={2.8}>
                {tabs.map((tab) => (
                  <SwiperSlide key={tab.index} style={{ padding: "1.2rem 0" }}>
                    <button
                      onClick={() => setActiveTab(tab.index)}
                      className={
                        activeTab === tab.index
                          ? "tab-access active"
                          : "tab-access"
                      }
                      style={{
                        width: "100%",
                        color: activeTab === tab.index ? "#fff" : "#333",
                        backgroundColor:
                          activeTab === tab.index ? "red" : "#fff",
                        borderRadius: "8px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        boxShadow:
                          activeTab === tab.index
                            ? "0 4px 8px rgba(0, 0, 0, 0.1)"
                            : "none",
                        fontSize: "1.2rem",
                        minHeight: "4rem",
                      }}
                      disabled={disabledTabs.includes(tab.index)}
                    >
                      {tab.name}
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="tabs-grid">
                {tabs.map((tab) => (
                  <div key={tab.index} style={{ flex: 1 }}>
                    <button
                      onClick={() => setActiveTab(tab.index)}
                      className={
                        activeTab === tab.index
                          ? "tab-access active"
                          : "tab-access"
                      }
                      style={{
                        width: "100%",
                        color: activeTab === tab.index ? "#fff" : "#333",
                        backgroundColor:
                          activeTab === tab.index ? "red" : "#fff",
                        borderRadius: "8px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        boxShadow:
                          activeTab === tab.index
                            ? "0 4px 8px rgba(0, 0, 0, 0.1)"
                            : "none",
                      }}
                      disabled={disabledTabs.includes(tab.index)}
                    >
                      {tab.name}
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div>{tabs[activeTab]?.component}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesList;
