import React from "react";
import HeaderConponent from "../../Component/BuyPhoneComponent/HeaderComponent/HeaderConponent";
import UpgradeList from "../../Component/BuyPhoneComponent/UpgradeList/index";
import Ecosystem from "../../Component/BuyPhoneComponent/Ecosystem/index";
import InfoTechnical from "../../Component/BuyPhoneComponent/InfoTechnical/InfoTechnical";
// import PrioritizePage from "../../Component/BuyPhoneComponent/prioritizePage/prioritizePage";
import ImagesInfo from "../../Component/BuyPhoneComponent/ImagesInfo/ImagesInfo";
function page() {
  return (
    <div className="bg-page">
      <HeaderConponent />
      <InfoTechnical />
      {/* <PrioritizePage /> */}

      <UpgradeList />
      <Ecosystem />
      <ImagesInfo />
    </div>
  );
}

export default page;
