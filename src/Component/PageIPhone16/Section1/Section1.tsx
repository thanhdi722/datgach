/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import CardProduct from "../../CardProductIP16/CardProductIP16";
import { Carousel } from "antd";
import style from "@/style//SliderProduct.module.css";
import {
  productsIP16Series,
  productsIP16,
  productsIP16Plus,
  productsIP16Pro,
  productsIP16ProMax,
} from "../../../app/api/DataTest";

const Section1: React.FC = () => {
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
    dots: false,
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

  const settingsNOTAUTO = {
    slidesToShow: 5,
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

  const [activeButton, setActiveButton] = useState<number>(1); // Default button 1

  const handleButtonClick = (buttonId: number) => {
    setActiveButton(buttonId);
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <img
        src="https://cdn2.cellphones.com.vn/insecure/rs:fill:768:0/q:90/plain/https://cellphones.com.vn/media/wysiwyg/bang-gia.png"
        alt=""
        style={{ display: "block", margin: "auto" }}
      />
      <div className={style.tabs_wrapper}>
        <button
          className={`${style.tab_item} ${style.button}`}
          onClick={() => handleButtonClick(1)}
          style={{
            backgroundColor: activeButton === 1 ? "black" : "white",
            color: activeButton === 1 ? "white" : "black",
          }}
        >
          iPhone 16 Series
        </button>
        <button
          className={`${style.tab_item} ${style.button}`}
          onClick={() => handleButtonClick(2)}
          style={{
            backgroundColor: activeButton === 2 ? "black" : "white",
            color: activeButton === 2 ? "white" : "black",
          }}
        >
          iPhone 16
        </button>
        <button
          className={`${style.tab_item} ${style.button}`}
          onClick={() => handleButtonClick(3)}
          style={{
            backgroundColor: activeButton === 3 ? "black" : "white",
            color: activeButton === 3 ? "white" : "black",
          }}
        >
          iPhone 16 Plus
        </button>
        <button
          className={`${style.tab_item} ${style.button}`}
          onClick={() => handleButtonClick(4)}
          style={{
            backgroundColor: activeButton === 4 ? "black" : "white",
            color: activeButton === 4 ? "white" : "black",
          }}
        >
          iPhone 16 Pro
        </button>
        <button
          className={`${style.tab_item} ${style.button}`}
          onClick={() => handleButtonClick(5)}
          style={{
            backgroundColor: activeButton === 5 ? "black" : "white",
            color: activeButton === 5 ? "white" : "black",
          }}
        >
          iPhone 16 Pro Max
        </button>
      </div>
      <div className={style.carousel_wrapper}>
        {activeButton === 1 && (
          <Carousel autoplay autoplaySpeed={2000} {...settings}>
            {productsIP16Series.map((product, index) => (
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
        )}
        {activeButton === 2 && (
          <Carousel {...settingsNOTAUTO}>
            {productsIP16.map((product, index) => (
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
        )}
        {activeButton === 3 && (
          <Carousel {...settingsNOTAUTO}>
            {productsIP16Plus.map((product, index) => (
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
        )}
        {activeButton === 4 && (
          <Carousel {...settingsNOTAUTO}>
            {productsIP16Pro.map((product, index) => (
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
        )}
        {activeButton === 5 && (
          <Carousel {...settingsNOTAUTO}>
            {productsIP16ProMax.map((product, index) => (
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
        )}
      </div>
    </div>
  );
};

export default Section1;
