/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import banner from "../../../assets/images/Head dat hang iPhone 16.png";
import Image from "next/image";

const Banner: React.FC = () => {
  return (
    <div style={{ width: "100vw", height: "max-content" }}>
      <Image src={banner} alt="Description of image" layout="responsive" />
    </div>
  );
};

export default Banner;
