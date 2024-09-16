import React from "react";
import Section3 from "../../Component/PageIPhone16/Section3/Section3";
import Banner from "../../Component/PageIPhone16/Banner/Banner";
import InfoTechnicalIphone16 from "../../Component/PageIPhone16/InfoTechnical/InfoTechnical";
import ExclusiveOffers from "../../Component/PageIPhone16/ExclusiveOffers/ExclusiveOffers";
// import SixCombo from "../../Component/PageIPhone16/SixCombo/SixCombo";
import PriceList from "../../Component/PageIPhone16/PriceList/PriceList";
function page() {
  return (
    <div>
      <Banner />
      <InfoTechnicalIphone16 />
      <ExclusiveOffers />
      <Section3 />
      <PriceList />
      {/* <SixCombo /> */}
    </div>
  );
}

export default page;
