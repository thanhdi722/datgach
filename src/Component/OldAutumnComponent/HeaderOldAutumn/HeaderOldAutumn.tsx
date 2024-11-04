"use client";
import React, { useEffect, useState } from "react";
import "./HeaderOldAutumn.scss";
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
const HeaderOldAutumn = () => {
  const [data, setData] = useState<ApiResponse | null>(null);

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
                  eq: "banner-page-thu-cu",
                },
              },
            },
          }),
        }
      );

      const result = await response.json();
      setData(result);
    } catch (err) {}
  };
  useEffect(() => {
    fetchBannerHeader();
  }, []);

  return (
    <div>
      {data?.data?.Slider?.items[0]?.Banner?.items[0]?.media ? (
        <img
          src={data.data.Slider.items[0].Banner.items[0].media}
          alt="Banner PC"
          className="HeaderOldAutumn-bannerPC"
        />
      ) : (
        <Spin>
          <div style={{ width: 1820, height: 500 }} />
        </Spin>
      )}
      {data?.data?.Slider?.items[0]?.Banner?.items[1]?.media ? (
        <img
          src={data.data.Slider.items[0].Banner.items[1].media}
          alt="Banner Mobile"
          className="HeaderOldAutumn-bannerMB"
        />
      ) : (
        <Spin>
          <div style={{ width: 1820, height: 500 }} />
        </Spin>
      )}
    </div>
  );
};

export default HeaderOldAutumn;
