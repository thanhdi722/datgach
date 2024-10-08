import { default as ComboPhuKien } from '../app/Combo-Phu-Kien/page'
import { default as Iphone16Series } from '../app/datgach-ip16/page'
import { default as ThangYeuThuong } from '../app/thang-yeu-thuong/page'

export const routingBachLongMobile = [
  {
    path: 'thang-yeu-thuong',
    component: <ThangYeuThuong />,
  },
  {
    path: 'iphone-16-series',
    component: <Iphone16Series />,
  },
  {
    path: 'combo-phu-kien',
    component: <ComboPhuKien />,
  },
]