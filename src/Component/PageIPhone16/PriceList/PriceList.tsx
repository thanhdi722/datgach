import React from "react";
import ProductCard from "../../CardPriceList/CardPriceList";
import iphone16 from "../../../assets/images/iphone16_BlackPro.png";

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
    <div
      style={{ display: "flex", flexWrap: "wrap", backgroundColor: "#1d1d1f" }}
    >
      {products.map((product, index) => (
        <ProductCard
          key={index}
          productName={product.productName}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
};

export default PriceList;
