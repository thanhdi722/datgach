import React from "react";
import combo1 from "../../../assets/images/6 BO QUA PK.png";
import Image from "next/image";
import style from "./SixCombo.module.css";
export default function SixCombo() {
  return (
    <div style={{ backgroundColor: "#1d1d1f" }}>
      <Image src={combo1} alt="combo1" className={style.comboImage} />
    </div>
  );
}
