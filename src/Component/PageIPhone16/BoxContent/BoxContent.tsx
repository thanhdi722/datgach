import * as React from "react";
import Box from "@mui/material/Box";
import style from "./BoxContent.module.css";
export default function BoxBasic() {
  return (
    <div id="box-gif" style={{ padding: "20px 0px" }}>
      <Box component="section" sx={{ p: 2 }} className={style.box}>
        <h3 className={style.title}>CÁC QUÀ TẶNG TẠI BẠCH LONG</h3>
        <ul className={style.content}>
          <li className={style.item}>
            <p>Bạch Long Mobile Đại Lý Ủy Quyền Samsung Việt Nam</p>
          </li>
          <li className={style.item}>
            <p>Bạch Long Mobile Đại Lý Ủy Quyền Samsung Việt Nam</p>
          </li>
          <li className={style.item}>
            <p>Bạch Long Mobile Đại Lý Ủy Quyền Samsung Việt Nam</p>
          </li>
          <li className={style.item}>
            <p>Bạch Long Mobile Đại Lý Ủy Quyền Samsung Việt Nam</p>
          </li>
          <li className={style.item}>
            <p>Bạch Long Mobile Đại Lý Ủy Quyền Samsung Việt Nam</p>
          </li>
        </ul>
      </Box>
    </div>
  );
}
