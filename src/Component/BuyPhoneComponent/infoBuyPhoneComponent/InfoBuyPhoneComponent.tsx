"use client";
import React, { useEffect, useState } from "react";
import "../../../style/InfoStyleCard.scss";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";
interface InfoTechnicalProps {
  productName: string;
  productPrices: { [capacity: string]: { [color: string]: string } };
  images: { [key: string]: StaticImageData };
  capacities: string[];
  colors: { name: string; colorCode: string }[];
  productLink: string;
  onSendData: (data: string) => void;
}

export default function InfoTechnicalComponent({
  productName,
  productPrices,
  images,
  capacities,
  productLink,
  colors,
  onSendData,
}: InfoTechnicalProps) {
  const [activeColor, setActiveColor] = useState(colors[0].name);
  const [activeCapacity, setActiveCapacity] = useState(capacities[0]);
  const getImageKey = (colorName: string) => {
    return colorName.replace("Màu ", "");
  };
  // const scrollToRegisterForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
  //   e.preventDefault();
  //   const registerForm = document.getElementById("registerForm");
  //   if (registerForm) {
  //     registerForm.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  useEffect(() => {
    onSendData(activeCapacity);
  }, [activeCapacity]);
  const sendData = () => {
    onSendData(activeCapacity);
  };
  return (
    <div className="infoTechnicalComponent">
      <div className="productName">{productName}</div>
      <div className="itemProduct">
        <div className="wrapImg">
          <Image
            src={images[getImageKey(activeColor)]}
            alt={productName}
            title={productName}
            style={{}}
          />
        </div>
        <p
          style={{ textAlign: "center", marginBottom: "10px", color: "#000" }}
          className="colorName"
        >
          {activeColor}
        </p>
        <div className="listColorProduct">
          {colors.map((color) => (
            <div
              key={color.name}
              title={color.name}
              className={`${
                color.name === activeColor ? `active selected` : ""
              }`}
              style={{ backgroundColor: color.colorCode }}
              onClick={() => setActiveColor(color.name)}
            ></div>
          ))}
        </div>
        <div className="listCapacity">
          {capacities.map((capacity) => (
            <div
              key={capacity}
              title={capacity}
              className={`${capacity === activeCapacity ? "active" : ""} ${
                !productPrices[capacity] ? "disabled" : ""
              }`}
              onClick={() => {
                if (productPrices[capacity]) {
                  setActiveCapacity(capacity);
                  sendData();
                }
              }}
            >
              {capacity}
            </div>
          ))}
        </div>
        <div className="productPrice">
          <span>Giá</span>
          <b>{productPrices[activeCapacity][activeColor]}</b>
        </div>
        <div className="productPrice">
          <p>
            Trả góp chỉ từ{"  "}
            {(
              parseInt(
                productPrices[activeCapacity][activeColor].replace(/\D/g, "")
              ) / 12
            ).toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}{" "}
            /tháng
          </p>
        </div>
        <div>
          <Link
            href={productLink}
            style={{ color: "#fff" }}
            className="groupButtonMobile"
          >
            <button type="submit" className="button_buy">
              Mua Ngay
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
