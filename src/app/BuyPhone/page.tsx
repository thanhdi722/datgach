import React from "react";
import HeaderConponent from "../../Component/BuyPhoneComponent/HeaderComponent/HeaderConponent";
import UpgradeList from "../../Component/BuyPhoneComponent/UpgradeList/index";
import Ecosystem from "../../Component/BuyPhoneComponent/Ecosystem/index";
import InfoTechnical from "../../Component/BuyPhoneComponent/InfoTechnical/InfoTechnical";
import thuculendoi from "../../../public/Images/thuculendoi.webp";
// import PrioritizePage from "../../Component/BuyPhoneComponent/prioritizePage/prioritizePage";
import ImagesInfo from "../../Component/BuyPhoneComponent/ImagesInfo/ImagesInfo";
import Image from "next/image";
function page() {
  return (
    <div className="bg-page">
      <HeaderConponent />
      <InfoTechnical />
      {/* <PrioritizePage /> */}
      <div className="container">
        <Image
          src={thuculendoi}
          width={1820}
          height={1200}
          alt="thu-cu-len-doi"
        />
      </div>
      <UpgradeList />
      <Ecosystem />
      <ImagesInfo />
    </div>
  );
}

export default page;
