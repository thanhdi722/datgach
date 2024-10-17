import { default as ComboPhuKien } from "../app/Combo-Phu-Kien/page";
import { default as Iphone16Series } from "../app/datgach-ip16/page";
import { default as ThangYeuThuong } from "../app/thang-yeu-thuong/page";
import { default as MayCuGiaRe } from "../app/product-old/page";
import { default as ThuCuDoiMoi } from "../app/ThuCu/page";
import { default as TraGopKhongLaiSuat } from "../app/xemkyhan/page";
export const routingBachLongMobile = [
  {
    path: "thang-yeu-thuong",
    component: <ThangYeuThuong />,
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
];
