import React from "react";
import Banner from "../../Component/ComponentXaKho/Banner/page";
// import Header from "../../Component/ComponentXaKho/Header/page";
import Body from "../../Component/ComponentXaKho/Body/page";
import CardProductAccessory from "../../Component/ComponentXaKho/ProductAccessory/ProductAccessory";
import AccessoriesList from "../../Component/ComponentXaKho/accessories/index";
// import ProductIPhone from "../../Component/ComponentXaKho/ProductIPhone/ProductIPhone";
import ProductIphoneNew from "../../Component/ComponentXaKho/ProductIphoneNew/ProductIphoneNew";
import ProductListIphone from "../../Component/ComponentXaKho/ProductOld/ProductOld";
import ProductAndroidNew from "../../Component/ComponentXaKho/ProductAndroidNew/ProductAndroidNew";
import BannerSlider from "../../Component/ComponentXaKho/banner-slide/index";
function page() {
  return (
    <div>
      <Banner />
      {/* <Header /> */}
      <Body />
      <BannerSlider />
      {/* <ProductIPhone /> */}
      <ProductIphoneNew />
      <ProductAndroidNew />
      <ProductListIphone />
      <AccessoriesList />
      <CardProductAccessory />
    </div>
  );
}

export default page;
