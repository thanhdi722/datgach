/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import banner from "../../../assets/images/baner_iphone16.png";
import Image from "next/image";
import timeLine from "../../../assets/images/TIMELINE.png";
import style from "./Banner.module.css";
import chuongtrinh from "../../../assets/images/4 chuong trinh.png";
const Banner: React.FC = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "max-content",
        backgroundColor: "#1d1d1f",
      }}
    >
      <Image
        src={banner}
        alt="Description of image"
        layout="responsive"
        style={{ width: "100vw" }}
      />
      <Image src={chuongtrinh} alt="timeline" />
      <Image src={timeLine} alt="timeline" className={style.timeline} />
    </div>
  );
};

export default Banner;
