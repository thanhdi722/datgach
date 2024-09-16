/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "./CardProduct.module.css";
interface CardProductProps {
  link: string;
  imageUrl: string;
  title: string;
  listedPrice: string;
  tradeInDiscount: string;
  paymentDiscount: string;
  finalPrice: string;
}

function CardProductIP16({
  link,
  imageUrl,
  title,
  listedPrice,
  tradeInDiscount,
  paymentDiscount,
  finalPrice,
}: CardProductProps) {
  return (
    <div className={style.product_container}>
      <div className={style.product_info_container}>
        <div className={style.product_info}>
          <div className={style.product__image}>
            <img
              src={imageUrl}
              width="358"
              alt={title}
              loading="lazy"
              className={style.product__img}
            />
          </div>
          <div className={style.two_line}>
            <h3>{title}</h3>
          </div>
          <div className={style.product__price}>
            Giá niêm yết: <span>{listedPrice}</span>
          </div>
          <div className={style.apple_cross_sell}>
            <span>Giảm thu cũ: {tradeInDiscount}</span>
          </div>
          <div className={style.apple_cross_sell}>
            <span>Ưu đãi thanh toán: {paymentDiscount}</span>
          </div>
          <div className={style.last_price}>
            Giá cuối: <span>{finalPrice}</span>
          </div>
          <button type="submit" className={style.button_buy}>
            <a href={link} style={{ color: "#fff" }}>
              Đặt ngay
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardProductIP16;
