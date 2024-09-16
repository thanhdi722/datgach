import React from "react";
import Section2 from "../../Component/PageIPhone16/Section2/Section2";
import Section3 from "../../Component/PageIPhone16/Section3/Section3";
import Banner from "../../Component/PageIPhone16/Banner/Banner";
import NavBar from "../../Component/PageIPhone16/NavBar/NavBar";
import InfoTechnicalIphone16 from "../../Component/PageIPhone16/InfoTechnical/InfoTechnical";
function page() {
  return (
    <div>
      <Banner />
      <NavBar />
      <InfoTechnicalIphone16 />
      <Section2 />
      <Section3 />
    </div>
  );
}

export default page;
