import React from "react";
import Section3 from "../../Component/PageIPhone16/Section3/Section3";
import Banner from "../../Component/PageIPhone16/Banner/Banner";
import InfoTechnicalIphone16 from "../../Component/PageIPhone16/InfoTechnical/InfoTechnical";
import ExclusiveOffers from "../../Component/PageIPhone16/ExclusiveOffers/ExclusiveOffers";
import SixCombo from "../../Component/PageIPhone16/SixCombo/SixCombo";
import PriceList from "../../Component/PageIPhone16/PriceList/PriceList";
import FromMain from "../../Component/PageIPhone16/FromInfo/form.main";
import Header from "../../Component/Header/header.main";
import BoxContent from "../../Component/PageIPhone16/BoxContent/BoxContent";
function page() {
  return (
    <div>
      <Header />
      <Banner />
      <InfoTechnicalIphone16 />
      <ExclusiveOffers />
      <FromMain />
      <PriceList />
      <Section3 />
      <SixCombo />
      <BoxContent />
    </div>
  );
}

export default page;
