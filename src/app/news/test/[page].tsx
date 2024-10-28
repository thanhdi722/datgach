"use client";

import React, { useEffect, useState } from "react";
import { queryBNewDetail, queryBNew } from "../../utils/utils";
import "./NewSub.scss";
import icBachLong from "../../../../public/ic-bachlong.webp";
import { Col, Row, Spin, Breadcrumb } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useRouter, useParams } from "next/navigation";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import icUser from "../../../../public/ic-user-4.svg";
import Link from "next/link";

// Định nghĩa interface cho các kiểu dữ liệu được sử dụng
export interface Author {
  author_id: number;
  author_url: string;
  name: string;
  featured_image: string;
  identifier: string;
  creation_time: string | null;
  update_time: string | null;
}

export interface BlogPost {
  post_id: number;
  identifier: string;
  title: string;
  creation_time: string;
  update_time: string;
  first_image: string;
  filtered_content: string;
  author: Author;
  views_count: number;
  categories: {
    identifier: string;
  }[];
}

export interface BlogPosts {
  post_id: number;
  title: string;
  identifier: string;
  filtered_content: string;
  author: Author;
  update_time: string | null;
  creation_time: string;
  first_image: string;
  categories: {
    identifier: string;
  }[];
}

export default function PostDetail() {
  const [dataParam, setDataParam] = useState<string | null>(null);
  const [newsData, setNewsData] = useState<BlogPosts | null>(null);
  const [newsData1, setNewsData1] = useState<BlogPost[] | null>(null);
  const [newsData2, setNewsData2] = useState<BlogPost[] | null>(null);
  const [newsData3, setNewsData3] = useState<BlogPost[] | null>(null);
  const [visibleItems, setVisibleItems] = useState(3);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const tabIds = {
    "Trang Chủ": 19,
    "Tin Công Nghệ": 9,
    "Khám Phá": 10,
    "Đánh Giá": 12,
    "Thủ Thuật, Q&A": 14,
    "Khuyến Mãi": 20,
    "Tin Tức Sự Kiện": 27,
    "Tuyển Dụng": 21,
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlSegments = window.location.pathname.split("/");
      const lastSegment = urlSegments[urlSegments.length - 1];
      setDataParam(lastSegment);
    }
  }, [typeof window !== "undefined" ? window.location.search : null]);

  useEffect(() => {
    if (dataParam) {
      fetchBlogPostsData();
    }
  }, [dataParam]);

  const variables = {
    url_key: dataParam,
  };

  async function fetchBlogPostsData() {
    const response = await fetch(
      "https://beta-api.bachlongmobile.com/graphql",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: queryBNewDetail,
          variables,
        }),
      }
    );
    const data = await response.json();
    if (data && data.data && data.data.blogPostByUrlKey) {
      setNewsData(data.data.blogPostByUrlKey);
    }
  }

  const variablesNew = {
    filter: {
      category_id: {
        eq: 19, // Cập nhật ID của tab hiện tại
      },
    },
    pageSize: 100,
    currentPage: 1,
    sortFiled: "publish_time",
    allPosts: false,
    sort: ["DESC"],
  };

  const variablesHot = {
    filter: {
      category_id: {
        eq: 19, // Tab hiện tại
      },
      is_featured: {
        eq: 1,
      },
    },
    pageSize: 100,
    currentPage: 1,
    sortFiled: "publish_time",
    allPosts: false,
    sort: ["DESC"],
  };

  async function fetchBlogPostsDataProduct() {
    const response = await fetch(
      "https://beta-api.bachlongmobile.com/graphql",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: queryBNew,
          variables: variablesNew,
        }),
      }
    );
    const data = await response.json();
    setNewsData1(data.data.blogPosts.items);
  }

  async function fetchBlogPostsDataNew() {
    setLoading(true);
    const response = await fetch(
      "https://beta-api.bachlongmobile.com/graphql",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: queryBNew,
          variables: variablesNew,
        }),
      }
    );
    const data = await response.json();
    setNewsData2(data.data.blogPosts.items);
    setLoading(false);
  }

  async function fetchBlogPostsDataHot() {
    setLoading(true);
    const response = await fetch(
      "https://beta-api.bachlongmobile.com/graphql",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: queryBNew,
          variables: variablesHot,
        }),
      }
    );
    const data = await response.json();
    setNewsData3(data.data.blogPosts.items);
    setLoading(false);
  }

  useEffect(() => {
    fetchBlogPostsDataProduct();
    fetchBlogPostsDataNew();
    fetchBlogPostsDataHot();
  }, []);

  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + 5);
  };

  const handlePostClick = (postUrl: string, categoryIdentifier: string) => {
    setDataParam(postUrl);
    router.push(`/news/${categoryIdentifier}/${postUrl}`);
    setVisibleItems(5);
  };

  return (
    <div className="NewSub-pageNew">
      <div className="container">
        <Breadcrumb
          items={[
            {
              title: <Link href="https://bachlongmobile.com/">Trang Chủ</Link>,
            },
            {
              title: <Link href="/news">Tin tức</Link>,
            },
            {
              title: <Link href="">Chi tiết tin tức</Link>,
            },
          ]}
        />
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <Spin size="large" />
          </div>
        ) : (
          <Row className="NewSub-box-container">
            <Col span={16} className="NewSub-box-container-Col">
              <div className="NewSub-box-shadow">
                {newsData && (
                  <>
                    <p className="NewSub-title">{newsData.title}</p>
                    <div style={{ display: "flex", marginTop: "20px" }}>
                      <img
                        className="NewSub-img-author"
                        src={icBachLong.src}
                        alt=""
                      />
                      <div style={{ padding: "10px" }}>
                        <p style={{ paddingBottom: "6px" }}>
                          {newsData.author?.name}
                        </p>
                        <p>
                          {newsData.update_time
                            ? new Date(
                                newsData.update_time
                              ).toLocaleDateString()
                            : ""}
                        </p>
                      </div>
                    </div>
                    <div
                      className="test-css-NewsSub"
                      contentEditable="false"
                      dangerouslySetInnerHTML={{
                        __html: `${newsData?.filtered_content}`,
                      }}
                    ></div>
                  </>
                )}
              </div>
            </Col>
            <Col span={8} className="NewSub-box-container-Col">
              <h2 className="newSubHot-newTitle">Tin mới nhất</h2>
              {newsData1 &&
                newsData1.slice(0, visibleItems).map((post, index) => (
                  <div
                    key={index}
                    className="NewSub-NewHot"
                    onClick={() =>
                      handlePostClick(
                        post.identifier,
                        post.categories[0].identifier
                      )
                    }
                  >
                    <img
                      style={{ borderRadius: "10px" }}
                      src={post.first_image}
                      alt=""
                    />
                    <h3 className="NewSub-titleNewHot">{post.title}</h3>
                  </div>
                ))}
              <button onClick={handleLoadMore}>Xem thêm</button>
            </Col>
          </Row>
        )}
      </div>
    </div>
  );
}
