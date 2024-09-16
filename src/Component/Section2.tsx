/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import CardProduct from "@/app/Component/CardProductIP16/CardProductIP16";
import { Carousel } from "antd";
import style from "./Section2.module.css";
import { ecosystemApple } from "@/app/Api/Data";
function Section2() {
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
        }}
        onClick={onClick}
      >
        <div
          style={{
            padding: "10px",
            background: "black",
            height: "40px",
            width: "20px",
            borderRadius: "100px 0 0 100px",
            boxShadow: "0 0 4px 5px rgba(0,0,0,.2)",
            marginTop: "-10px",
            color: "black",
          }}
        ></div>
      </div>
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
        }}
        onClick={onClick}
      >
        <div
          style={{
            padding: "10px",
            background: "black",
            height: "40px",
            width: "20px",
            borderRadius: "100px 0 0 100px",
            boxShadow: "0 0 4px 5px rgba(0,0,0,.2)",
            marginTop: "-10px",
            color: "black",
          }}
        ></div>
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesPerRow: 1,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div style={{ backgroundColor: "black" }}>
      <img
        src="https://cdn2.cellphones.com.vn/insecure/rs:fill:768:0/q:90/plain/https://cellphones.com.vn/media/wysiwyg/bang-gia.png"
        alt=""
        style={{ display: "block", margin: "auto" }}
      />
      <div className={style.carousel_wrapper}>
        <Carousel autoplay autoplaySpeed={2000} {...settings}>
          {ecosystemApple.map((product, index) => (
            <div key={index} className={style.carousel_item}>
              <CardProduct
                link={product.link}
                imageUrl={product.imageUrl}
                title={product.title}
                listedPrice={product.listedPrice}
                tradeInDiscount={product.tradeInDiscount}
                paymentDiscount={product.paymentDiscount}
                finalPrice={product.finalPrice}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Section2;
