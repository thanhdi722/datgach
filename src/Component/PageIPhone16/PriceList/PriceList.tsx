import React from "react";
import ProductCard from "../../CardPriceList/CardPriceList";
import iphone16 from "../../../assets/images/iphone16_BlackPro.png";
import styles from "./PriceList.module.css";
const products = [
  {
    productName: "iPhone 15 Pro Max",
    price: "30.151.000",
    imageUrl: iphone16,
  },
  {
    productName: "iPhone 15 Pro Max",
    price: "30.151.000",
    imageUrl: iphone16,
  },
  {
    productName: "iPhone 15 Pro Max",
    price: "30.151.000",
    imageUrl: iphone16,
  },
  {
    productName: "iPhone 15 Pro Max",
    price: "30.151.000",
    imageUrl: iphone16,
  },
  {
    productName: "iPhone 15 Pro Max",
    price: "30.151.000",
    imageUrl: iphone16,
  },
  {
    productName: "iPhone 15 Pro Max",
    price: "30.151.000",
    imageUrl: iphone16,
  },
  {
    productName: "iPhone 15 Pro Max",
    price: "30.151.000",
    imageUrl: iphone16,
  },
  {
    productName: "iPhone 15 Pro Max",
    price: "30.151.000",
    imageUrl: iphone16,
  },

  // Add more products as needed
];

const PriceList: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#1d1d1f" }}>
      <div
        style={{
          width: "55vw",
          margin: "0px auto",
          padding: "20px 0px",
        }}
      >
        <h2
          style={{
            color: " #d09e7b",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Bảng giá thu tham khảo
        </h2>
      </div>
      <div className={styles.priceList}>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            productName={product.productName}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default PriceList;
