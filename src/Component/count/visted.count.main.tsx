import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import styled from "styled-components"; // Import styled-components
// import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Grid } from "@mui/material";
import "@/style/Visitors.css";
// Updated styled-component for VisitorCountStyled to match the image
const VisitorCountStyled = styled.div`
  background-color: #000000; /* Nền màu đen */
  font-size: 1rem; /* Kích thước font chữ lớn */
  font-weight: 700; /* Font chữ đậm */
  color: #ffffff; /* Màu chữ trắng */
  letter-spacing: 1px; /* Khoảng cách giữa các ký tự */
  text-align: center; /* Căn giữa văn bản */
  padding: 10px 0; /* Khoảng cách trên dưới */
  border-top: 1px solid #999999; /* Viền trên màu xám nhạt */
  border-bottom: 1px solid #999999; /* Viền dưới màu xám nhạt */
  display: flex; /* Sử dụng flexbox để sắp xếp icon và văn bản */
  justify-content: center; /* Căn giữa nội dung */
  align-items: center; /* Căn giữa dọc */
  margin-top: -8px;
  width: 100%;
`;

// const IconStyled = styled(PeopleAltIcon)`
//   font-size: 1.5rem; /* Kích thước icon vừa phải */
//   margin-left: 10px; /* Khoảng cách giữa icon và chữ */
//   color: #ffffff; /* Icon màu trắng */
// `;

const onComplete = () => {
  console.log("Completed! 👏");
};

const onStart = () => {
  console.log("Started! 💨");
};

function Visitors() {
  const [visitors, setVisitors] = useState(3012); // Giá trị mặc định ban đầu là 3000
  const [isClient, setIsClient] = useState(false); // Để kiểm tra xem có chạy trên client-side không

  // Chỉ chạy sau khi component đã được mount trên client-side
  useEffect(() => {
    setIsClient(true); // Đã có client-side
  }, []);

  // Truy cập vào localStorage trên client-side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedVisitors = localStorage.getItem("visitorCount");
      if (savedVisitors) {
        setVisitors(parseInt(savedVisitors, 10));
      }
    }
  }, []); // Chạy một lần khi component được mount

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("visitorCount", visitors.toString());
    }
  }, [visitors]);

  // Tăng số lượng người truy cập mỗi phút
  useEffect(() => {
    const interval = setInterval(() => {
      setVisitors((prevVisitors) => prevVisitors + 1);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  if (!isClient) {
    return null; // Không render gì nếu chưa chạy trên client
  }

  return (
    <VisitorCountStyled>
      <Grid container>
        <Grid
          item
          xs={12}
          className="text_white"
          sx={{
            background: "linear-gradient(90deg,#dfae86, #9ca4c4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: { xs: "11px", sm: "14px" },
          }}
        >
          <CountUp
            start={visitors}
            end={visitors}
            duration={1}
            useEasing={true}
            separator=","
            onEnd={onComplete}
            onStart={onStart}
          />
          <span> Khách hàng đăng ký</span>
        </Grid>
        <Grid
          xs={12}
          item
          sx={{
            background: "linear-gradient(90deg,#dfae86, #9ca4c4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: { xs: "14px", sm: "18px" },
            textDecoration: "underline",
          }}
        >
          Thể Lệ Chương Trình
        </Grid>
      </Grid>
    </VisitorCountStyled>
  );
}

export default Visitors;
