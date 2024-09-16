import React from "react";
import style from "./ProductCard.module.css";
import Image from "next/image";
import { StaticImageData } from "next/image";
interface ProductCardProps {
  productName: string;
  price: string;
  imageUrl: StaticImageData;
}

const ProductCard: React.FC<ProductCardProps> = ({
  productName,
  price,
  imageUrl,
}) => {
  return (
    <div className={style.cardContainer}>
      <Image src={imageUrl} alt={productName} className={style.productImage} />
      <h3 className={style.productName}>{productName}</h3>
      <div className={style.labelPrice}>Giá thu đến: {price}</div>
    </div>
  );
};

export default ProductCard;
