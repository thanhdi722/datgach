/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import "./product-list-laptop.scss";
import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";
import Image from "next/image";
import noProducts from "../../../../public/img-no-pro-matching.webp";
import CardProduct from "../CardProductComboPK/CardProduct";
import imagesPK from "../../../../public/combo-pk/dochoipc.png";

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

const variablesAppleCategories = [
  {
    filter: { category_uid: { eq: "NzA=" } },
    pageSize: 200,
    currentPage: 1,
  },
  {
    filter: { category_uid: { eq: "NzE=" } },
    pageSize: 200,
    currentPage: 1,
  },
  {
    filter: { category_uid: { eq: "NzM=" } },
    pageSize: 200,
    currentPage: 1,
  },
];

const variablesNewCategory = {
  filter: {
    category_uid: {
      eq: "MTE5",
    },
  },
  pageSize: 200,
  currentPage: 1,
};

async function fetchProductListData() {
  const responses = await Promise.all(
    variablesAppleCategories.map((variables) =>
      fetch("https://beta-api.bachlongmobile.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query, variables }),
      })
    )
  );

  const responseNewCategory = await fetch(
    "https://beta-api.bachlongmobile.com/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: variablesNewCategory,
      }),
    }
  );

  const dataApple = await Promise.all(responses.map((res) => res.json()));
  const dataNewCategory = await responseNewCategory.json();

  const appleProducts = dataApple.flatMap(
    (data) => data.data.products.items
  ) as Product[];
  const newCategoryProducts = dataNewCategory.data.products.items as Product[];

  return {
    apple: appleProducts,
    newCategory: newCategoryProducts,
  };
}

const Section5: React.FC = () => {
  const { data, error, isLoading } = useQuery<{
    apple: Product[];
    newCategory: Product[];
  }>({
    queryKey: ["productListData"],
    queryFn: fetchProductListData,
    staleTime: 300000,
  });

  const [activeTab, setActiveTab] = useState<string>("Apple");
  const [filteredData, setFilteredData] = useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<number>(10);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
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
  useEffect(() => {
    if (activeTab === "Apple") {
      setFilteredData(data?.apple || []);
    } else {
      setFilteredData(data?.newCategory || []);
    }
    setVisibleProducts(10);
    setIsExpanded(false);
  }, [activeTab, data]);

  const toggleProducts = () => {
    setVisibleProducts(isExpanded ? 10 : filteredData.length);
    setIsExpanded(!isExpanded);
  };

  if (isLoading) {
    return (
      <div
        className="loading container-spin flex h-28 items-center justify-center"
        style={{ height: "300px" }}
      >
        <Spin />
      </div>
    );
  }

  if (error) {
    return <div>Error loading data</div>;
  }
  const loadMorePosts = () => {
    setVisibleProducts(
      (prevVisible) =>
        prevVisible + (filteredData && filteredData.length > 10 ? 10 : 5)
    );
  };

  return (
    <div className="OldForNew-Section-laptop" id="item-laptop">
      <div className="container">
        <div className="OldForNew-Section-Container-laptop">
          {dataTitle ? (
            dataTitle?.data?.Slider?.items[0]?.Banner?.items
              .filter((item) =>
                item.name.includes("title đồ chơi công nghệ trang phụ kiện")
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
          <div className="tab-button-table-combo-pk-dochoi">
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
                activeTab === "NewCategory" ? "btn-tab-buyPhone_active" : ""
              }`}
              onClick={() => setActiveTab("NewCategory")}
            >
              Khác
            </button>
          </div>
          {filteredData.length === 0 && !isLoading ? (
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
                {filteredData.slice(0, visibleProducts).map((product) => (
                  <CardProduct key={product?.id} {...product} />
                ))}
              </div>
              {visibleProducts < (filteredData?.length || 0) && ( // Check if more products are available
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
