/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import banner from "../../../assets/images/baner_iphone16.png";
import bannerMB from "../../../assets/images/banner_mobile.png";
import Image from "next/image";
import timeLine from "../../../assets/images/TIMELINE.png";
import style from "./Banner.module.css";
import chuongtrinh from "../../../assets/images/4 chuong trinh.png";
import chuongtrinhMB from "../../../assets/images/4_chuong_trinh_mobile.png";
const Banner: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#1d1d1f",
      }}
    >
      <Image
        src={banner}
        alt="Description of image"
        className={style.bannerPc}
      />
      <Image
        src={bannerMB}
        alt="Description of image"
        className={style.bannerMB}
      />
      <Image src={chuongtrinh} alt="timeline" className={style.chuongtrinhPc} />
      <Image
        src={chuongtrinhMB}
        alt="timeline"
        className={style.chuongtrinhMB}
      />
      <Image src={timeLine} alt="timeline" className={style.timeline} />
    </div>
  );
};

export default Banner;
