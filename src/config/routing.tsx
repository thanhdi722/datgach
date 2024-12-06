import { default as ComboPhuKien } from "../app/Combo-Phu-Kien/page";
import { default as Iphone16Series } from "../app/datgach-ip16/page";
import { default as ThangYeuThuong } from "../app/thang-yeu-thuong/page";
import { default as ThangTriAn } from "../app/thang-tri-an/page";
import { default as MayCuGiaRe } from "../app/product-old/page";
import { default as ThuCuDoiMoi } from "../app/ThuCu/page";
import { default as TraGopKhongLaiSuat } from "../app/xemkyhan/page";
import { default as WomenDay } from "../app/women-day/page";
import { default as HalloWeen } from "../app/flash-sale-halloween/page";
import { default as XaKho } from "../app/xa-kho/page";
import { default as BNews } from "../app/news/page";
import { default as FlashSaleTuan } from "../app/flash-sale-tuan/page";
import { default as NhaGiaoVietNam } from "../app/nha-giao-viet-nam/page";
import { default as MungNamMoi } from "../app/mung-nam-moi/page";
import { default as BlackFriday } from "../app/black-friday/page";
import { default as DealDauThang } from "../app/sale-thang-12/page";
export const routingBachLongMobile = [
  {
    path: "thang-yeu-thuong",
    component: <ThangYeuThuong />,
  },
  {
    path: "thang-tri-an",
    component: <ThangTriAn />,
  },
  {
    path: "product-old",
    component: <MayCuGiaRe />,
  },
  {
    path: "iphone-16-series",
    component: <Iphone16Series />,
  },
  {
    path: "combo-phu-kien",
    component: <ComboPhuKien />,
  },
  {
    path: "thu-cu-doi-moi",
    component: <ThuCuDoiMoi />,
  },
  {
    path: "tra-gop-khong-lai-suat",
    component: <TraGopKhongLaiSuat />,
  },
  {
    path: "news",
    component: <BNews />,
  },
  {
    path: "happy-women-day",
    component: <WomenDay />,
  },
  {
    path: "flash-sale-halloween",
    component: <HalloWeen />,
  },
  {
    path: "xa-kho",
    component: <XaKho />,
  },
  {
    path: "flash-sale-tuan",
    component: <FlashSaleTuan />,
  },
  {
    path: "nha-giao-viet-nam",
    component: <NhaGiaoVietNam />,
  },
  {
    path: "mung-nam-moi",
    component: <MungNamMoi />,
  },
  {
    path: "black-friday",
    component: <BlackFriday />,
  },
  {
    path: "deal-dau-thang",
    component: <DealDauThang />,
  },
];
