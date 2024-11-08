"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "../../../style/styleheaderbanner.css";
import banner1 from "../../../../public/Images/Gioi_thieu_BLM_1200x450_0810-3.jpg";
import banner2 from "../../../../public/Images/BOX-TRAGOP-8-150624.png";
import banner3 from "../../../../public/Images/tragop.png";
import banner4 from "../../../../public/Images/muadee1.png";
import banner5 from "../../../../public/Images/mpos1.png";
import banner6 from "../../../../public/Images/kredivo1.png";
import banner7 from "../../../../public/Images/hompaylater1.png";
import banner12 from "../../../../public/Images/hdsaigon1.png";
import banner13 from "../../../../public/Images/cathemienphi1.png";
import banner8 from "../../../../public/Images/BOX-TRAGOP-4-150624.png";
import banner9 from "../../../../public/Images/BOX-TRAGOP-5-150624 (1).png";
import banner10 from "../../../../public/Images/040924-BANNER-TRA-GOP-3-KHONG-1200.png";
import banner11 from "../../../../public/Images/banner11.png";
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
import Link from "next/link";
import { Spin } from "antd";
export default function BannerHeader() {
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
                  eq: "banner-xem-ky-han",
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fff897",
      }}
    >
      <div className="container">
        <div>
          <Image
            className="BuyInInstallments-Section1-bg1"
            src={banner1}
            alt=""
            width={1920}
            height={1080}
          />
          <Image
            className="BuyInInstallments-Section1-bg2"
            src={banner1}
            alt=""
            width={900}
            height={506}
          />
        </div>
        <Image
          className="BuyInInstallments-S1-ImageBG"
          src={banner2}
          alt=""
          width={1200}
          height={675}
        />
        <Image
          src={banner3}
          alt=""
          className="BuyInInstallments-S1-ImageBG"
          width={1200}
          height={675}
        />
        <div className="wrapper-banner2">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              // backgroundColor: "#fff",
              gap: "10px",
            }}
          >
            {dataTitle ? (
              dataTitle?.data?.Slider?.items[0]?.Banner?.items
                .filter((item) => item.name.includes("banner xem kỳ hạn 1"))
                .map((item, index) => (
                  <div key={index}>
                    <Link href={item?.link} target="_blank">
                      <Image
                        width={1000}
                        height={1000}
                        className="bannerline1"
                        src={item.media || ""}
                        alt={`privilege-${index + 1}`}
                      />
                    </Link>
                  </div>
                ))
            ) : (
              <Spin>
                <div style={{ width: 200, height: 200 }} />
              </Spin>
            )}
            {dataTitle ? (
              dataTitle?.data?.Slider?.items[0]?.Banner?.items
                .filter((item) => item.name.includes("banner xem kỳ hạn 2"))
                .map((item, index) => (
                  <div key={index}>
                    <Link href={item?.link} target="_blank">
                      <Image
                        width={1000}
                        height={1000}
                        className="bannerline1"
                        src={item.media || ""}
                        alt={`privilege-${index + 1}`}
                      />
                    </Link>
                  </div>
                ))
            ) : (
              <Spin>
                <div style={{ width: 200, height: 200 }} />
              </Spin>
            )}
            {/* <Image
                src={banner4}
                alt=""
                width={1000}
                height={1000}
                className="bannerline1"
              />
              <Image
                src={banner5}
                alt=""
                width={1000}
                height={1000}
                className="bannerline1"
              /> */}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              // backgroundColor: "#fff",
              gap: "10px",
            }}
          >
            {dataTitle ? (
              dataTitle?.data?.Slider?.items[0]?.Banner?.items
                .filter((item) => item.name.includes("banner xem kỳ hạn 3"))
                .map((item, index) => (
                  <div key={index}>
                    <Link href={item?.link} target="_blank">
                      <Image
                        className="bannerline2"
                        alt=""
                        width={1000}
                        height={1000}
                        src={item.media || ""}
                      />
                    </Link>
                  </div>
                ))
            ) : (
              <Spin>
                <div style={{ width: 200, height: 200 }} />
              </Spin>
            )}
            {dataTitle ? (
              dataTitle?.data?.Slider?.items[0]?.Banner?.items
                .filter((item) => item.name.includes("banner xem kỳ hạn 4"))
                .map((item, index) => (
                  <div key={index}>
                    <Link href={item?.link} target="_blank">
                      <Image
                        className="bannerline2"
                        alt=""
                        width={1000}
                        height={1000}
                        src={item.media || ""}
                      />
                    </Link>
                  </div>
                ))
            ) : (
              <Spin>
                <div style={{ width: 200, height: 200 }} />
              </Spin>
            )}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              // backgroundColor: "#fff",
              gap: "10px",
            }}
          >
            {dataTitle ? (
              dataTitle?.data?.Slider?.items[0]?.Banner?.items
                .filter((item) => item.name.includes("banner xem kỳ hạn 5"))
                .map((item, index) => (
                  <div key={index}>
                    <Link href={item?.link} target="_blank">
                      <Image
                        className="bannerline2"
                        alt=""
                        width={1000}
                        height={1000}
                        src={item.media || ""}
                      />
                    </Link>
                  </div>
                ))
            ) : (
              <Spin>
                <div style={{ width: 200, height: 200 }} />
              </Spin>
            )}
            {dataTitle ? (
              dataTitle?.data?.Slider?.items[0]?.Banner?.items
                .filter((item) => item.name.includes("banner xem kỳ hạn 6"))
                .map((item, index) => (
                  <div key={index}>
                    <Link href={item?.link} target="_blank">
                      <Image
                        className="bannerline2"
                        alt=""
                        width={1000}
                        height={1000}
                        src={item.media || ""}
                      />
                    </Link>
                  </div>
                ))
            ) : (
              <Spin>
                <div style={{ width: 200, height: 200 }} />
              </Spin>
            )}
          </div>
        </div>

        <Image
          src={banner8}
          alt=""
          className="BuyInInstallments-S1-ImageBG"
          width={1200}
          height={675}
        />
        <Image
          src={banner9}
          alt=""
          className="BuyInInstallments-S1-ImageBG"
          width={1200}
          height={675}
        />
        {/* <div className="doublebanner">
          <Link
            className="BuyInInstallments-S1-Image"
            href={`https://bachlongmobile.com/news/news/sieu-uu-dai-tra-gop-apple/`}
          >
            <Image src={banner10} alt="" width={1200} height={675} />
          </Link>
          <Link
            className="BuyInInstallments-S1-Image"
            href={`https://bachlongmobile.com/promotion/tra-gop-tai-chinh/`}
          >
            <Image src={banner11} alt="" width={1200} height={675} />
          </Link>
        </div> */}
      </div>
    </div>
  );
}
