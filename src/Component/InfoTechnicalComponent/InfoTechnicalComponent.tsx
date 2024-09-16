"use client";
import React, { useState } from "react";
import style from "./InfoTechnicalComponent.module.css";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface InfoTechnicalProps {
  productName: string;
  productPrices: { [key: string]: string };
  images: { [key: string]: StaticImageData };
  capacities: string[];
  colors: { name: string; colorCode: string }[];
  productLink: string;
}

export default function InfoTechnicalComponent({
  productName,
  productPrices,
  images,
  capacities,
  colors,
  productLink,
}: InfoTechnicalProps) {
  const [activeColor, setActiveColor] = useState(colors[0].name);
  const [activeCapacity, setActiveCapacity] = useState(capacities[0]);
  const getImageKey = (colorName: string) => {
    return colorName.replace("Màu ", "");
  };
  return (
    <div className={style.infoTechnicalComponent}>
      <div className={style.itemProduct}>
        <div className={style.wrapImg}>
          <Image
            src={images[getImageKey(activeColor)]}
            alt={productName}
            title={productName}
          />
        </div>
        <div className={style.productName}>{productName}</div>
        <p style={{ textAlign: "center", marginBottom: "10px" }}>
          {activeColor}
        </p>
        <div className={style.listColorProduct}>
          {colors.map((color) => (
            <div
              key={color.name}
              title={color.name}
              className={`${
                color.name === activeColor
                  ? `${style.active} ${style.selected}`
                  : ""
              }`}
              style={{ backgroundColor: color.colorCode }}
              onClick={() => setActiveColor(color.name)}
            ></div>
          ))}
        </div>
        <div className={style.listCapacity}>
          {capacities.map((capacity) => (
            <div
              key={capacity}
              title={capacity}
              className={`${capacity === activeCapacity ? style.active : ""} ${
                !productPrices[capacity] ? style.disabled : ""
              }`}
              onClick={() =>
                productPrices[capacity] && setActiveCapacity(capacity)
              }
            >
              {capacity}
            </div>
          ))}
        </div>
        <div className={style.productPrice}>
          <span>Giá</span> <b>{productPrices[activeCapacity]}</b>
        </div>
        <div className={style.groupButtonMobile}>
          <button type="submit" className={style.button_buy}>
            <a href={productLink} style={{ color: "#fff" }}>
              Đặt ngay
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
