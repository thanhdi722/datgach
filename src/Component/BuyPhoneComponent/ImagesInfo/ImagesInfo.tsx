"use client";
import React, { useState } from "react";
import Image from "next/image";
import ImagesInfoIP16 from "../../../../public/Images/imagesInfoIp16.png";
import InfoIP16Plus from "../../../../public/Images/info-iphone-16-16-plus.png";
import "../../../Style/ImagesInfo.scss";

function ImagesInfo() {
  const [activeButton, setActiveButton] = useState<number>(1);
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleButtonClick = (buttonId: number) => {
    setActiveButton(buttonId);
  };

  return (
    <div style={{ backgroundColor: "#1d1d1f" }}>
      <div className="Container">
        <div className="tabs_wrapper">
          <button
            className={`${"tab_item"} ${"button"}`}
            onClick={() => handleButtonClick(1)}
            style={{
              backgroundColor: activeButton === 1 ? "White" : "black",
              color: activeButton === 1 ? "black" : "white",
            }}
          >
            iPhone 16 Pro
          </button>
          <button
            className={`${"tab_item"} ${"button"}`}
            onClick={() => handleButtonClick(2)}
            style={{
              backgroundColor: activeButton === 2 ? "white" : "black",
              color: activeButton === 2 ? "black" : "white",
            }}
          >
            iPhone 16
          </button>
        </div>
        <div className={`${"content"} ${expanded ? "expanded" : ""}`}>
          {activeButton === 1 && (
            <Image src={ImagesInfoIP16} alt="Description of iPhone 16 Pro" />
          )}
          {activeButton === 2 && (
            <Image src={InfoIP16Plus} alt="Description of iPhone 16" />
          )}
        </div>
        <button
          className={`${"expandButton"}`}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Thu gọn" : "Xem thêm"}
        </button>
      </div>
      <div className={`${"ContainerMb"}`}>
        <div className={`${"tabs_wrapper"}`}>
          <button
            className={`${"tab_item"} ${"button"}`}
            onClick={() => handleButtonClick(1)}
            style={{
              backgroundColor: activeButton === 1 ? "White" : "black",
              color: activeButton === 1 ? "black" : "white",
            }}
          >
            iPhone 16 Pro
          </button>
          <button
            className={`${"tab_item"} ${"button"}`}
            onClick={() => handleButtonClick(2)}
            style={{
              backgroundColor: activeButton === 2 ? "white" : "black",
              color: activeButton === 2 ? "black" : "white",
            }}
          >
            iPhone 16
          </button>
        </div>
        <div>
          {activeButton === 1 && (
            <Image src={ImagesInfoIP16} alt="Description of iPhone 16 Pro" />
          )}
          {activeButton === 2 && (
            <Image src={InfoIP16Plus} alt="Description of iPhone 16" />
          )}
        </div>
      </div>
    </div>
  );
}

export default ImagesInfo;
