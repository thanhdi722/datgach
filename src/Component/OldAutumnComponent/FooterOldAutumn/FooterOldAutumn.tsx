"use client";
import React, { useEffect, useState } from "react";
import "./FooterOldAutumn.scss"; // Import the global SCSS
import Image from "next/image";

import imagePhone from "../../../../public/ic-phone-white.svg";
import ModalForm from "../ModalInfoOldAutumn/ModalInfoOldAutumn";

const queryBNew = `query getCategories($filters:CategoryFilterInput){categories(filters:$filters){__typename items{description icon_image image_banner name url_path daily_sale{start_date end_date sale_type}slider_banner_left{title identifier Banner{items{banner_id caption link media media_alt name}page_info{current_page page_size total_pages}}}slider_banner_right{title identifier Banner{items{banner_id caption link media media_alt name}page_info{current_page page_size total_pages}}}daily_sale_id slider_id slider_two is_trend content_hot content_new check_show_category_in_page check_show_brand_in_page show children{breadcrumbs{...BreadcrumbFields}...CategoryTreeFields children{breadcrumbs{...BreadcrumbFields}...CategoryTreeFields children{breadcrumbs{...BreadcrumbFields}...CategoryTreeFields children{breadcrumbs{...BreadcrumbFields}...CategoryTreeFields}}}image_banner icon_image}}}}fragment CategoryTreeFields on CategoryTree{is_show_category_slider category_trend{__typename name image url_key url_path}icon_image image_banner slider_banner_left{title identifier Banner{items{banner_id caption link media media_alt name}page_info{current_page page_size total_pages}}}slider_banner_right{title identifier Banner{items{banner_id caption link media media_alt name}page_info{current_page page_size total_pages}}}slider_two is_trend show check_show_category_in_page check_show_brand_in_page content_hot content_new uid id available_sort_by canonical_url name image include_in_menu meta_description meta_keywords meta_title display_mode url_key url_path description path path_in_store children_count position}fragment BreadcrumbFields on Breadcrumb{category_level category_name category_uid category_url_key category_url_path}`;
const variables = {
  filters: { url_key: { eq: "thu-cu-doi-moi" } },
};

const FooterOldAutumn = () => {
  const [newsData, setNewsData] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true); // Show the modal
  };

  const handleModalCancel = () => {
    setIsModalVisible(false); // Hide the modal
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
          query: queryBNew,
          variables,
        }),
      }
    );
    const data = await response.json();
    setNewsData(data.data.categories.items[0].description);
  }
  useEffect(() => {
    fetchBlogPostsData();
  }, []);

  return (
    <div style={{ backgroundColor: "#FFFEED", padding: "10px 0" }}>
      <div className="container">
        <footer className="FooterOldAutumn">
          <div className="FooterOldAutumn-mainSection">
            <div className="FooterOldAutumn-mainSection-info">
              <p className="FooterOldAutumn-heading">
                Bạn không tìm thấy sản phẩm cần định giá?
              </p>
              <button className="FooterOldAutumn-ctaButton" onClick={showModal}>
                Nhấn tại đây
              </button>
            </div>
            <div
              className="OldAutumn-testcss"
              dangerouslySetInnerHTML={{ __html: `${newsData}` }}
            />
            {/* <div contentEditable='false' dangerouslySetInnerHTML={`${newsData}`}></div> */}

            <div className="FooterOldAutumn-extraSection">
              <div className="FooterOldAutumn-extraSection-videoSection">
                <iframe
                  className="FooterOldAutumn-extraSection-videoSection-item"
                  src="https://www.youtube.com/embed/eoLHZmo5XrA"
                  title="HƯỚNG DẪN QUY TRÌNH THU CŨ ĐỔI MỚI TẠI BẠCH LONG MOBILE"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
              <div className="FooterOldAutumn-contactSection">
                <p className="FooterOldAutumn-contactSection-card">
                  <span>
                    <Image
                      className="FooterOldAutumn-contactSection-card-images"
                      src={imagePhone}
                      alt=""
                    />
                  </span>
                  <span>Liên hệ tư vấn:</span>{" "}
                  <span className="FooterOldAutumn-hotline">1900.63.64.69</span>
                </p>
                <ul
                  style={{
                    marginTop: "10px",
                    lineHeight: "1.5",
                    padding: "10px 30px",
                    backgroundColor: "#ecfdf5",
                    border: "1px solid #10b981",
                    borderRadius: "10px",
                  }}
                >
                  <li>Gọi qua hotline</li>
                  <li>Chat với nhân viên tư vấn.</li>
                  <li>
                    Để lại bình luận bên dưới trang hoặc tại
                    <br className="FooterOldAutumn-hotline-br" /> trang sản phẩm
                    muốn thu cũ lên đời.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <ModalForm visible={isModalVisible} onCancel={handleModalCancel} />
    </div>
  );
};

export default FooterOldAutumn;
