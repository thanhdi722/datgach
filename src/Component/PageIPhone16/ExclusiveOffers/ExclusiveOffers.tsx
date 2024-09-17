import React from "react";
import Image from "next/image";
import ExclusiveOffersImage from "@/assets/images/Asset 12.png";
import SetWarrantyRightsImage from "@/assets/images/DAC QUYEN BAO HANH.png";
import SetWarrantyRightsImageMB from "@/assets/images/uu dai doc quyen 5 sao mobile.png";
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
        className={styles.imageEdit + " " + styles.uudaiPc}
      />
      <Image
        src={SetWarrantyRightsImage}
        alt="Exclusive Offers"
        className={styles.imageWrapper}
      />
      <Image
        src={SetWarrantyRightsImageMB}
        alt="Exclusive Offers"
        className={styles.imageWrapperMB + " " + styles.uudaiMb}
      />
      <Image
        src={newChangeImage}
        alt="Exclusive Offers"
        className={styles.imageWrapper}
      />
    </div>
  );
}
