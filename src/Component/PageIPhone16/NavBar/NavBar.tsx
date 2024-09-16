"use client";
import React, { useState } from "react";
import style from "./NavBar.module.css";

function NavBar() {
  const [activeButton, setActiveButton] = useState<number>(1); // Default button 1

  const handleButtonClick = (buttonId: number) => {
    setActiveButton(buttonId);
  };

  return (
    <div
      className={style.navbar_container}
      style={{
        backgroundColor: "#000",
        position: "sticky",
        top: 0,
        zIndex: 999,
      }}
    >
      <div className={style.tabs_wrapper}>
        <button
          className={`${style.tab_item} ${style.button} ${
            activeButton === 1 ? style.active : ""
          }`}
          onClick={() => handleButtonClick(1)}
          style={{
            backgroundColor: activeButton === 1 ? "white" : "black",
          }}
        >
          <a href="#box-gif">Quà tặng Bạch Long</a>
        </button>
        <button
          className={`${style.tab_item} ${style.button} ${
            activeButton === 2 ? style.active : ""
          }`}
          onClick={() => handleButtonClick(2)}
          style={{
            backgroundColor: activeButton === 2 ? "white" : "black",
          }}
        >
          Thu cũ đổi mới
        </button>
        <button
          className={`${style.tab_item} ${style.button} ${
            activeButton === 3 ? style.active : ""
          }`}
          onClick={() => handleButtonClick(3)}
          style={{
            backgroundColor: activeButton === 3 ? "white" : "black",
          }}
        >
          Trả góp 0% lãi suất
        </button>
        <button
          className={`${style.tab_item} ${style.button} ${
            activeButton === 4 ? style.active : ""
          }`}
          onClick={() => handleButtonClick(4)}
          style={{
            backgroundColor: activeButton === 4 ? "white" : "black",
          }}
        >
          16 Tiện ích ưu đãi
        </button>
        <button
          className={`${style.tab_item} ${style.button} ${
            activeButton === 5 ? style.active : ""
          }`}
          onClick={() => handleButtonClick(5)}
          style={{
            backgroundColor: activeButton === 5 ? "white" : "black",
          }}
        >
          60 Ngày LỖI ĐỔI &quot;MỚI&quot;
        </button>
        <button
          className={`${style.tab_item} ${style.button} ${
            activeButton === 6 ? style.active : ""
          }`}
          onClick={() => handleButtonClick(6)}
          style={{
            backgroundColor: activeButton === 6 ? "white" : "black",
          }}
        >
          Hệ sinh thái APPLE
        </button>
      </div>
    </div>
  );
}

export default NavBar;
