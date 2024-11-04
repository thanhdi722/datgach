/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import "./product-list-charging-cable.scss";
// import { Carousel } from "antd";
import CardProduct from "../CardProductComboPK/CardProduct";
import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";
import pklaptop from "../../../public/coc cap sac.png";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import imagesPK from "../../../../public/combo-pk/capsacpc.png";
import noProducts from "../../../../public/img-no-pro-matching.webp";
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
      eq: "Mjc=",
    },
  },
  pageSize: 200,
  currentPage: 1,
};

async function fetchProductListDataCapsac() {
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

const Section5: React.FC = () => {
  const { data, error, isLoading } = useQuery<Product[]>({
    queryKey: ["productListDataCapsac", variables.filter.category_uid.eq],
    queryFn: fetchProductListDataCapsac,
    staleTime: 300000,
  });
  const [dataTitle, setDataTitle] = useState<ApiResponse | null>(null);
  const [activeTab, setActiveTab] = useState<string>("Apple");
  const [filteredData, setFilteredData] = useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<number>(10);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [visibleCount, setVisibleCount] = useState(10);
  useEffect(() => {
    if (activeTab === "All") {
      setFilteredData(data || []);
    } else {
      const filtered = data?.filter((product) =>
        product?.name.toLowerCase().includes(activeTab.toLowerCase())
      );
      setFilteredData(filtered || []);
    }
    setVisibleCount(10);
    setVisibleProducts(10);
    setIsExpanded(false);
  }, [activeTab, data]);
  useEffect(() => {
    switch (activeTab) {
      case "Cáp sạc":
        variables.filter.category_uid.eq = "MjM5";
        break;
      case "Củ sạc":
        variables.filter.category_uid.eq = "MjQw";
        break;
      case "Apple":
        variables.filter.category_uid.eq = "NDAy";
        break;
      case "Bộ sạc":
        variables.filter.category_uid.eq = "MjQx";
        break;
      default:
        variables.filter.category_uid.eq = "Mjc=";
    }
    setVisibleCount(10);
    setVisibleProducts(10);
  }, [activeTab]);
  const toggleProducts = () => {
    if (isExpanded) {
      setVisibleProducts(10);
      setIsExpanded(false);
    } else {
      setVisibleProducts(filteredData.length);
      setIsExpanded(true);
    }
  };
  useEffect(() => {
    if (data && data.length > 10) {
      setVisibleProducts(10);
    } else {
      setVisibleProducts(5);
    }
  }, [data]);
  const loadMore = () => {
    setVisibleProducts((prevVisible) => prevVisible + 5);
  };

  // if (isLoading) {
  // 	return (
  // 		<div className='loading container-spin'>
  // 			<Spin />
  // 		</div>
  // 	);
  // }

  if (error) {
    return <div>Error loading data</div>;
  }

  const loadMorePosts = () => {
    setVisibleProducts(
      (prevVisible) => prevVisible + (data && data.length > 10 ? 10 : 5)
    );
  };

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
                  eq: "banner-page-combo-phu-kien",
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
    <div className="OldForNew-Section-charging-cable" id="item-charging-cable">
      <div className="container">
        <div className="OldForNew-Section-Container-charging-cable">
          {dataTitle ? (
            dataTitle?.data?.Slider?.items[0]?.Banner?.items
              .filter((item) =>
                item.name.includes("title cốc cáp sạc trang phụ kiện")
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
          <div className="header-table-combo-pk">
            {/* <div style={{ paddingBottom: "10px" }}>
              <h2 className="title-table-combo-pk">Phụ Kiện Cốc Cáp Sạc</h2>
            </div> */}
            <div className="tab-button-table-combo-pk">
              <button
                className={`btn-tab-buyPhone ${
                  activeTab === "Apple" ? "btn-tab-buyPhone_active" : ""
                }`}
                onClick={() => setActiveTab("Apple")}
              >
                Apple
              </button>
              <button
                className={`btn-tab-buyPhone ${
                  activeTab === "Cáp sạc" ? "btn-tab-buyPhone_active" : ""
                }`}
                onClick={() => setActiveTab("Cáp sạc")}
              >
                Cáp sạc
              </button>
              <button
                className={`btn-tab-buyPhone ${
                  activeTab === "Củ sạc" ? "btn-tab-buyPhone_active" : ""
                }`}
                onClick={() => setActiveTab("Củ sạc")}
              >
                Củ sạc
              </button>
              <button
                className={`btn-tab-buyPhone ${
                  activeTab === "Bộ sạc" ? "btn-tab-buyPhone_active" : ""
                }`}
                onClick={() => setActiveTab("Bộ sạc")}
              >
                Bộ sạc
              </button>
            </div>
          </div>
          {isLoading && (
            <div
              className="loading container-spin flex h-28 items-center justify-center"
              style={{
                height: "300px",
              }}
            >
              <Spin />
            </div>
          )}
          {data && data.length === 0 && !isLoading ? (
            <div className="no-products-message">
              <Image
                src={noProducts}
                alt="no-products"
                className="no-products-image"
              />
              <span>Không có sản phẩm</span>
            </div>
          ) : (
            <>
              <div className="OldForNew-Section5-ItemSlider">
                {data?.slice(0, visibleProducts).map((product) => (
                  <CardProduct
                    key={product?.id}
                    name={product?.name}
                    url_key={product?.url_key}
                    image={product?.image}
                    price_range={product?.price_range}
                  />
                ))}
              </div>

              {visibleProducts < (data?.length || 0) && (
                <div className="load-more-container">
                  <button onClick={loadMorePosts}>Xem thêm</button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section5;
