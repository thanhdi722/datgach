import React from "react";
import style from "./InfoTechnical.module.css";
import InfoTechnicalComponent from "../../../Component/InfoTechnicalComponent/InfoTechnicalComponent";
import iphone16Green from "../../../assets/images/iphone16_Green.png";
import iphone16Black from "../../../assets/images/iphone16_Black.png";
import iphone16ProBlack from "../../../assets/images/iphone16_BlackPro.png";
import iphone16WhitePro from "../../../assets/images/iphone16_Whitte.png";
import iphone16White from "../../../assets/images/iphone16_White.png";
import iphone16Pink from "../../../assets/images/iphone16_Pink.png";
import iphone16Blue from "../../../assets/images/iphone16_blue.png";
import iphone16TitanPro from "../../../assets/images/iphone16_titan.png";
import iphone16DesertPro from "../../../assets/images/iphone16_desert.png";

import { StaticImageData } from "next/image";
import { Carousel } from "antd";
type ProductImage = { [key: string]: StaticImageData };

type Product = {
  productName: string;
  productPrices: { [key: string]: string };
  images: ProductImage;
  capacities: string[];
  colors: Array<{ name: string; colorCode: string }>;
  productLink: string;
};

export default function InfoTechnical() {
  const products: Product[] = [
    {
      productName: "iPhone 16 Pro Max",
      productPrices: {
        "1TB": "45.690.000₫",
        "512GB": "39.690.000₫",
        "256GB": "34.190.000₫",
      },
      images: {
        "Titan Đen": iphone16ProBlack,
        "Titan Sa Mạc": iphone16DesertPro,
        "Titan Tự Nhiên": iphone16TitanPro,
        "Titan Trắng": iphone16WhitePro,
      },
      capacities: ["1TB", "512GB", "256GB"],
      colors: [
        { name: "Titan Đen", colorCode: "rgb(60, 64, 66)" },
        { name: "Titan Sa Mạc", colorCode: "rgb(255, 218, 185)" },
        { name: "Titan Tự Nhiên", colorCode: "rgb(250, 235, 215)" },
        { name: "Titan Trắng", colorCode: "rgb(251, 247, 244)" },
      ],
      productLink:
        "/dtdd/iphone-16-pro-max?m=2&amp;gid=1&amp;pId=329136&amp;strcode=0131491004227",
    },
    {
      productName: "iPhone 16 Pro",
      productPrices: {
        "1TB": "42.690.000₫",
        "512GB": "36.690.000₫",
        "256GB": "30.690.000₫",
        "128GB": "27.690.000₫",
      },
      images: {
        "Titan Đen": iphone16ProBlack,
        "Titan Sa Mạc": iphone16DesertPro,
        "Titan Tự Nhiên": iphone16TitanPro,
        "Titan Trắng": iphone16WhitePro,
      },
      capacities: ["1TB", "512GB", "256GB", "128GB"],
      colors: [
        { name: "Titan Đen", colorCode: "rgb(60, 64, 66)" },
        { name: "Titan Sa Mạc", colorCode: "rgb(255, 218, 185)" },
        { name: "Titan Tự Nhiên", colorCode: "rgb(250, 235, 215)" },
        { name: "Titan Trắng", colorCode: "rgb(251, 247, 244)" },
      ],
      productLink:
        "/dtdd/iphone-16-pro-max?m=2&amp;gid=1&amp;pId=329136&amp;strcode=0131491004227",
    },
    {
      productName: "iPhone 16 Plus",
      productPrices: {
        "512GB": "33.690.000₫",
        "256GB": "27.590.000₫",
        "128GB": "24.690.000₫",
      },
      images: {
        Đen: iphone16Black,
        Trắng: iphone16White,
        "Xanh Mòng Két": iphone16Green,
        Hồng: iphone16Pink,
        "Xanh Lưu Ly": iphone16Blue,
      },
      capacities: ["512GB", "256GB", "128GB"],
      colors: [
        { name: "Đen", colorCode: "rgb(60, 64, 66)" },
        { name: "Trắng", colorCode: "rgb(251, 247, 244)" },
        { name: "Xanh Mòng Két", colorCode: "rgb(176, 212, 210)" },
        { name: "Hồng", colorCode: "rgb(255, 110, 180)" },
        { name: "Xanh Lưu Ly", colorCode: "rgb(72, 118, 255)" },
      ],
      productLink:
        "/dtdd/iphone-16-pro-max?m=2&amp;gid=1&amp;pId=329136&amp;strcode=0131491004227",
    },
    {
      productName: "iPhone 16",
      productPrices: {
        "512GB": "30.690.000₫",
        "256GB": "24.690.000₫",
        "128GB": "21.690.000₫",
      },
      images: {
        Đen: iphone16Black,
        Trắng: iphone16White,
        "Xanh Mòng Két": iphone16Green,
        Hồng: iphone16Pink,
        "Xanh Lưu Ly": iphone16Blue,
      },
      capacities: ["512GB", "256GB", "128GB"],
      colors: [
        { name: "Đen", colorCode: "rgb(60, 64, 66)" },
        { name: "Trắng", colorCode: "rgb(251, 247, 244)" },
        { name: "Xanh Mòng Két", colorCode: "rgb(176, 212, 210)" },
        { name: "Hồng", colorCode: "rgb(255, 110, 180)" },
        { name: "Xanh Lưu Ly", colorCode: "rgb(72, 118, 255)" },
      ],
      productLink:
        "/dtdd/iphone-16-pro-max?m=2&amp;gid=1&amp;pId=329136&amp;strcode=0131491004227",
    },
  ];
  const settings = {
    slidesToShow: 2,
    rows: 1,
    slidesPerRow: 1,
    dots: false,
  };
  return (
    <div className={style.infoTechnical}>
      <h4 className={style.title}>Bảng Giá iPhone 16 Series Chính Hãng VN/A</h4>
      <div className={style.productList}>
        {products.map((product, index) => (
          <div key={index} className={style.productItem}>
            <InfoTechnicalComponent
              productName={product.productName}
              productPrices={product.productPrices}
              images={product.images}
              capacities={product.capacities}
              colors={product.colors}
              productLink={product.productLink}
            />
          </div>
        ))}
      </div>
      <div className={style.productListMB}>
        <Carousel arrows infinite={false} {...settings}>
          {products.map((product, index) => (
            <div key={index} className={style.productItem}>
              <InfoTechnicalComponent
                productName={product.productName}
                productPrices={product.productPrices}
                images={product.images}
                capacities={product.capacities}
                colors={product.colors}
                productLink={product.productLink}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
