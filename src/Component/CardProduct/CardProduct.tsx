/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./CardProduct.css";
function CardProduct() {
  return (
    <div>
      <div className="CardProduct swiper-slide swiper-slide-prev">
        <a>
          <figure className="product__img">
            <img
              style={{
                objectFit: "contain",
                maxWidth: "180px",
                height: "180px",
                display: "block",
                margin: "auto",
              }}
              className=""
              data-src="https://old.bachlongmobile.com/media//catalog/product/2/_/2_15_3.png"
              alt="Ốp Lưng Silicon MagSafe cho iPhone 15  - Chính Hãng Apple VN"
              src="https://old.bachlongmobile.com/media//catalog/product/2/_/2_15_3.png"
            />
            <div className="product__discount">3% </div>
            <div className="sticker-combo-requare"></div>
          </figure>
          <div className="product__title">
            Ốp Lưng Silicon MagSafe cho iPhone 15 - Chính Hãng Apple VN{" "}
          </div>
          <div className="product__groupPrice" style={{ background: "0" }}>
            <span className="product__priceSpecial">1.390.000₫</span>
            <span className="product__priceRegular">1.429.000₫</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default CardProduct;
