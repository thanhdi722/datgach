import React from "react";
import Section3 from "../../Component/PageIPhone16/Section3/Section3";
import Banner from "../../Component/PageIPhone16/Banner/Banner";
import InfoTechnicalIphone16 from "../../Component/PageIPhone16/InfoTechnical/InfoTechnical";
import ExclusiveOffers from "../../Component/PageIPhone16/ExclusiveOffers/ExclusiveOffers";
function page() {
  return (
    <div>
      <Banner />
      <InfoTechnicalIphone16 />
      <ExclusiveOffers />
      <Section3 />
    </div>
  );
}

export default page;
