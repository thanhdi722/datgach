"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";
import DecorWomen from "../../../../public/flase-sale/giovang.png";
import Access10k from "../accessories20_10/acess-10k/index";
import Access20k from "../accessories20_10/acess-20k/index";
import Access110 from "../accessories20_10/acess-110/index";
import AccessTo210 from "../accessories20_10/acess-to210/index";
import Access310 from "../accessories20_10/acess-310/index";
import Access290 from "../accessories20_10/acess-290/index";
import Access210 from "../accessories20_10/acess-210/index";
import FrameProduct from "../../../../public/flase-sale/f1.png";
import { useProductSaleData } from "../../../app/hooks/useProductSaleData";
import "swiper/css";
import "./product.scss";
import { Spin } from "antd";
import Link from "next/link";

// Define the current date outside the component to avoid re-calculation on each render
const currentDate = new Date();
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
const ProductList: React.FC = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  // const tabs = [
  //   {
  //     index: 0,
  //     name: <span>NGÀY 08/11</span>,
  //     component: <Access10k />,
  //     date: new Date("2024-11-08"),
  //   },
  //   {
  //     index: 1,
  //     name: <span>NGÀY 09/11</span>,
  //     component: <Access20k />,
  //     date: new Date("2024-11-09"),
  //   },
  //   {
  //     index: 2,
  //     name: <span>NGÀY 10/11</span>,
  //     component: <Access110 />,
  //     date: new Date("2024-11-10"),
  //   },
  //   {
  //     index: 3,
  //     name: <span>NGÀY 11/11</span>,
  //     component: <Access210 />,
  //     date: new Date("2024-11-11"),
  //   },
  //   {
  //     index: 4,
  //     name: <span>NGÀY 12/11</span>,
  //     component: <Access310 />,
  //     date: new Date("2024-11-12"),
  //   },
  //   // {
  //   //   index: 5,
  //   //   name: <span>NGÀY 30/10</span>,
  //   //   component: <AccessTo210 />,
  //   //   date: new Date("2024-10-30"),
  //   // },
  //   // {
  //   //   index: 6,
  //   //   name: <span>NGÀY 31/10</span>,
  //   //   component: <Access290 />,
  //   //   date: new Date("2024-10-31"),
  //   // },
  // ];

  // const initialActiveTab = tabs.findIndex(
  //   (tab) => currentDate.toDateString() === tab.date.toDateString()
  // );
  // const [activeTab, setActiveTab] = useState<number>(
  //   initialActiveTab === -1 ? 0 : initialActiveTab
  // );
  // const [isMobile, setIsMobile] = useState<boolean>(false);
  // const [disabledTabs, setDisabledTabs] = useState<number[]>([]);
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
  const { data } = useProductSaleData();
  const filteredDatassss = data?.filter(
    (item: any) => item.title === "SP HOT Giảm Sâu"
  );
  const filteredIphones = filteredDatassss?.[0]?.items.filter(
    (product: any) => {
      // Kiểm tra nếu tên sản phẩm chứa từ "iPhone"
      return product.product.name.toLowerCase().includes("iphone");
    }
  );
  // useEffect(() => {
  //   // Determine which tabs should be disabled based on the current date
  //   const disabled = tabs
  //     .filter(
  //       (tab) =>
  //         currentDate >
  //         new Date(
  //           tab.date.getFullYear(),
  //           tab.date.getMonth(),
  //           tab.date.getDate() + 1
  //         )
  //     )
  //     .map((tab) => tab.index);
  //   setDisabledTabs(disabled);

  //   // Set up a listener to detect if the screen width changes
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth < 768);
  //   };

  //   handleResize(); // Initial check for mobile view
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize); // Clean up listener
  //   };
  // }, []); // Remove dependencies that could cause re-renders

  // useEffect(() => {
  //   // Scroll to the active tab on mobile if swiperRef is available
  //   if (isMobile && swiperRef.current) {
  //     swiperRef.current.slideTo(activeTab);
  //   }
  // }, [isMobile, activeTab]);

  return (
    <div
      className="product-list-sale"
      style={
        {
          // background: 'linear-gradient(180deg, #372d62 0, var(--bg-gradient-white, #15001B) 90%)',
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
                <div className="women-decor">
                  {dataTitle ? (
                    dataTitle?.data?.Slider?.items[0]?.Banner?.items
                      .filter((item) =>
                        item.name.includes("title giờ vàng flash sale tuần")
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
                {/* <div className="tabs">
                {tabs.map((tab) => (
                  <div key={tab.name}>
                    <button
                      onClick={() => {
                        setActiveTab(tab.name);
                      }}
                      className={
                        activeTab === tab.name ? "tab active" : "tab"
                      }
                      style={{
                        color: activeTab === tab.name ? "#fff" : "#000",
                        backgroundColor:
                          activeTab === tab.name ? "#ff7518" : "#fff",
                        padding: "12px 24px",
                        margin: "8px",
                        borderRadius: "8px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        boxShadow:
                          activeTab === tab.name
                            ? "0 4px 8px rgba(0, 0, 0, 0.1)"
                            : "none",
                      }}
                    >
                      {tab.name}
                    </button>
                  </div>
                ))}
              </div> */}

                {/* <div style={{ display: 'flex', marginBottom: '12px' }} className='sub-tab-list'>
          {tabs
            .find((tab) => tab.name === activeTab)
            ?.subTabs.map((subTab) => (
              <button
                key={subTab}
                onClick={() => setActiveSubTab(subTab)}
                className={activeSubTab === subTab ? 'sub-tab active' : 'sub-tab'}
                style={{
                  color: activeSubTab === subTab ? 'white' : '#000',
                  backgroundColor: activeSubTab === subTab ? '#ef373e' : '#f1f1f1',
                  border: activeSubTab === subTab ? '1px solid #ef373e' : '1px solid #ccc',
                  padding: '5px 10px',
                  margin: '5px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                {subTab}
              </button>
            ))}
        </div> */}

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
                                </div>
                                <div className="upgrade-item-content-body-reduced">
                                  <div className="price-reduced">
                                    {Number(
                                      product?.price_original
                                    )?.toLocaleString("vi-VN")}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
