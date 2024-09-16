import React from "react";
import Image from "next/image";
import ExclusiveOffersImage from "@/assets/images/Asset 12.png";
import SetWarrantyRightsImage from "@/assets/images/DAC QUYEN BAO HANH.png";
import styles from "./ExclusiveOffers.module.css";
import newChangeImage from "@/assets/images/THU CU LEN DOI.png";
export default function ExclusiveOffers() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#1d1d1f",
        overflow: "hidden",
      }}
    >
      <Image
        src={ExclusiveOffersImage}
        alt="Exclusive Offers"
        className={styles.imageEdit}
      />
      <Image
        src={SetWarrantyRightsImage}
        alt="Exclusive Offers"
        className={styles.imageWrapper}
      />
      <Image
        src={newChangeImage}
        alt="Exclusive Offers"
        className={styles.imageWrapper}
      />
    </div>
  );
}
