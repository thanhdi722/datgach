import React from "react";
import style from "@/style/InfoTechnical.module.css";
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

type ProductImage = { [key: string]: StaticImageData };

type Product = {
  productName: string;
  // productPrices: { [capacity: string]: { [color: string]: string } };
  images: ProductImage;
  // capacities: string[];
  colors: Array<{ name: string; colorCode: string }>;
  productLink: string;
};

export default function InfoTechnical() {
  const products: Product[] = [
    {
      productName: "iPhone 16 Pro Max",
      // productPrices: {
      //   "1TB": {
      //     "Titan Đen": "45.690.000₫",
      //     "Titan Sa Mạc": "45.690.000₫",
      //     "Titan Tự Nhiên": "45.990.000₫",
      //     "Titan Trắng": "45.990.000₫",
      //   },
      //   "512GB": {
      //     "Titan Đen": "39.690.000₫",
      //     "Titan Sa Mạc": "39.690.000₫",
      //     "Titan Tự Nhiên": "39.690.000₫",
      //     "Titan Trắng": "39.690.000₫",
      //   },
      //   "256GB": {
      //     "Titan Đen": "34.190.000₫",
      //     "Titan Sa Mạc": "34.190.000₫",
      //     "Titan Tự Nhiên": "34.190.000₫",
      //     "Titan Trắng": "34.190.000₫",
      //   },
      // },
      images: {
        "Titan Đen": iphone16ProBlack,
        "Titan Sa Mạc": iphone16DesertPro,
        "Titan Tự Nhiên": iphone16TitanPro,
        "Titan Trắng": iphone16WhitePro,
      },
      // capacities: ["1TB", "512GB", "256GB"],
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
      // productPrices: {
      //   "1TB": {
      //     "Titan Đen": "42.690.000₫",
      //     "Titan Sa Mạc": "42.690.000₫",
      //     "Titan Tự Nhiên": "42.690.000₫",
      //     "Titan Trắng": "42.690.000₫",
      //   },
      //   "512GB": {
      //     "Titan Đen": "36.690.000₫",
      //     "Titan Sa Mạc": "36.690.000₫",
      //     "Titan Tự Nhiên": "36.690.000₫",
      //     "Titan Trắng": "36.690.000₫",
      //   },
      //   "256GB": {
      //     "Titan Đen": "30.690.000₫",
      //     "Titan Sa Mạc": "30.690.000₫",
      //     "Titan Tự Nhiên": "30.690.000₫",
      //     "Titan Trắng": "30.690.000₫",
      //   },
      //   "128GB": {
      //     "Titan Đen": "27.690.000₫",
      //     "Titan Sa Mạc": "27.690.000₫",
      //     "Titan Tự Nhiên": "27.690.000₫",
      //     "Titan Trắng": "27.690.000₫",
      //   },
      // },
      images: {
        "Titan Đen": iphone16ProBlack,
        "Titan Sa Mạc": iphone16DesertPro,
        "Titan Tự Nhiên": iphone16TitanPro,
        "Titan Trắng": iphone16WhitePro,
      },
      // capacities: ["1TB", "512GB", "256GB", "128GB"],
      colors: [
        { name: "Titan Đen", colorCode: "rgb(60, 64, 66)" },
        { name: "Titan Sa Mạc", colorCode: "rgb(255, 218, 185)" },
        { name: "Titan Tự Nhiên", colorCode: "rgb(250, 235, 215)" },
        { name: "Titan Trắng", colorCode: "rgb(251, 247, 244)" },
      ],
      productLink:
        "/dtdd/iphone-16-pro?m=2&amp;gid=1&amp;pId=329136&amp;strcode=0131491004227",
    },
    {
      productName: "iPhone 16 Plus",
      // productPrices: {
      //   "512GB": {
      //     Đen: "33.690.000₫",
      //     Trắng: "33.690.000₫",
      //     "Xanh Mòng Két": "33.690.000₫",
      //     Hồng: "33.690.000₫",
      //     "Xanh Lưu Ly": "33.690.000₫",
      //   },
      //   "256GB": {
      //     Đen: "27.690.000₫",
      //     Trắng: "27.690.000₫",
      //     "Xanh Mòng Két": "27.690.000₫",
      //     Hồng: "27.690.000₫",
      //     "Xanh Lưu Ly": "27.590.000₫",
      //   },
      //   "128GB": {
      //     Đen: "24.690.000₫",
      //     Trắng: "24.690.000₫",
      //     "Xanh Mòng Két": "24.690.000₫",
      //     Hồng: "24.690.000₫",
      //     "Xanh Lưu Ly": "24.690.000₫",
      //   },
      // },
      images: {
        Đen: iphone16Black,
        Trắng: iphone16White,
        "Xanh Mòng Két": iphone16Green,
        Hồng: iphone16Pink,
        "Xanh Lưu Ly": iphone16Blue,
      },
      // capacities: ["512GB", "256GB", "128GB"],
      colors: [
        { name: "Đen", colorCode: "rgb(60, 64, 66)" },
        { name: "Trắng", colorCode: "rgb(251, 247, 244)" },
        { name: "Xanh Mòng Két", colorCode: "rgb(176, 212, 210)" },
        { name: "Hồng", colorCode: "rgb(255, 110, 180)" },
        { name: "Xanh Lưu Ly", colorCode: "rgb(72, 118, 255)" },
      ],
      productLink:
        "/dtdd/iphone-16-plus?m=2&amp;gid=1&amp;pId=329136&amp;strcode=0131491004227",
    },
    {
      productName: "iPhone 16",
      // productPrices: {
      //   "512GB": {
      //     Đen: "30.690.000₫",
      //     Trắng: "30.690.000₫",
      //     "Xanh Mòng Két": "30.690.000₫",
      //     Hồng: "30.690.000₫",
      //     "Xanh Lưu Ly": "30.690.000₫",
      //   },
      //   "256GB": {
      //     Đen: "24.690.000₫",
      //     Trắng: "24.690.000₫",
      //     "Xanh Mòng Két": "24.690.000₫",
      //     Hồng: "24.690.000₫",
      //     "Xanh Lưu Ly": "24.690.000₫",
      //   },
      //   "128GB": {
      //     Đen: "21.690.000₫",
      //     Trắng: "21.690.000₫",
      //     "Xanh Mòng Két": "21.690.000₫",
      //     Hồng: "21.690.000₫",
      //     "Xanh Lưu Ly": "21.690.000₫",
      //   },
      // },
      images: {
        Đen: iphone16Black,
        Trắng: iphone16White,
        "Xanh Mòng Két": iphone16Green,
        Hồng: iphone16Pink,
        "Xanh Lưu Ly": iphone16Blue,
      },
      // capacities: ["512GB", "256GB", "128GB"],
      colors: [
        { name: "Đen", colorCode: "rgb(60, 64, 66)" },
        { name: "Trắng", colorCode: "rgb(251, 247, 244)" },
        { name: "Xanh Mòng Két", colorCode: "rgb(176, 212, 210)" },
        { name: "Hồng", colorCode: "rgb(255, 110, 180)" },
        { name: "Xanh Lưu Ly", colorCode: "rgb(72, 118, 255)" },
      ],
      productLink:
        "/dtdd/iphone-16?m=2&amp;gid=1&amp;pId=329136&amp;strcode=0131491004227",
    },
  ];

  return (
    <div className={style.infoTechnical}>
      <h4 className={style.title}>
        Hãy chọn ngay iPhone 16 Series cho bạn nhé !
      </h4>
      <div className={style.productList}>
        {products.map((product, index) => (
          <div key={index} className={style.productItem}>
            <InfoTechnicalComponent
              productName={product.productName}
              // productPrices={product.productPrices}
              images={product.images}
              // capacities={product.capacities}
              colors={product.colors}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
