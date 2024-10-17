import React from "react";
import styles from "../../../style/stylecard.module.css";

// Define gradient background styles

interface Props {
  index: number;
  priceorigin: number;
  data: {
    duration: number;
    monthly_installment: number;
    order_diffrence_amount: number;
    order_loan_amount: number;
    order_prepay_amount: number;
    order_total_amount: number;
    real_interest_rate: number;
    processing_fee: number;
    processing_fee_per_month: number;
  };
}

const gradients = [
  "linear-gradient(180deg,#e5ffe3,hsla(0,0%,100%,0))",
  "linear-gradient(180deg,#e1e9f4,hsla(0,0%,100%,0))",
  "linear-gradient(180deg,#ffe6cc,hsla(0,0%,100%,0))",
  "linear-gradient(180deg,#6d8feb,hsla(0,0%,100%,0))",
  "linear-gradient(180deg,#e5ffe3,hsla(0,0%,100%,0))",
  "linear-gradient(180deg,#e5ffe3,hsla(0,0%,100%,0))",
  "linear-gradient(180deg,#e5ffe3,hsla(0,0%,100%,0))",
  "linear-gradient(180deg,#e5ffe3,hsla(0,0%,100%,0))",
  "linear-gradient(180deg,#e5ffe3,hsla(0,0%,100%,0))",
]; // Add more gradients if needed
const colors = [
  "#10b981",
  "#94a3b8",
  "#b69778",
  "#2756d8",
  "#10b981",
  "#10b981",
  "#10b981",
  "#10b981",
  "#10b981",
];
export default function CardProduct(props: Props) {
  const { data, index, priceorigin } = props;
  console.log("check data card", data);

  const termGradient = gradients[index % gradients.length];
  const color = colors[index % colors.length];

  return (
    <div
      className={styles.card}
      style={{
        borderRadius: "8px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          background: termGradient,
          padding: "0 16px 0 16px",
          borderRadius: "8px 8px 0 0",
        }}
      >
        <div
          className={styles.header}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            className={styles.termNumber}
            style={{
              backgroundColor: color,
              borderRadius: "4px",
              color: "#fff",
            }}
          >
            {index + 1}
          </span>

          <div
            className={styles.totalPayment}
            style={{ padding: "0 16px 0 16px" }}
          >
            <div style={{ display: "flex", gap: "40px" }}>
              <span style={{ fontWeight: 300 }}>Tổng tiền trả góp</span>
              <span style={{ fontWeight: 300 }}>
                Kỳ hạn {data?.duration} tháng
              </span>
            </div>

            <span>{data.order_loan_amount.toLocaleString("vi-VN")} VNĐ</span>
          </div>
        </div>
      </div>

      <ul
        className={styles.details}
        style={{ listStyle: "none", padding: "0 16px 0 16px" }}
      >
        <li
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Giá trị đơn hàng</span>
          <span>{priceorigin.toLocaleString("vi-VN")} VNĐ</span>
        </li>
        <li
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Giá trả góp</span>
          <span>{data.order_total_amount.toLocaleString("vi-VN")} VNĐ</span>
        </li>
        <li
          className={styles.redText}
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "red",
          }}
        >
          <span>Góp mỗi tháng</span>
          <span>{data.monthly_installment.toLocaleString("vi-VN")} VNĐ</span>
        </li>
        <li
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Chênh lệch trả thẳng</span>
          <span>{data.order_diffrence_amount.toLocaleString("vi-VN")} VNĐ</span>
        </li>
      </ul>
      {/* Uncomment the button if you need it */}
      {/* <button className={styles.button} style={{ padding: "12px 24px", backgroundColor: "#1890ff", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>
      Chọn
    </button> */}
    </div>
  );
}
