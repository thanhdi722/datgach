import React from "react";
import ProductCard from "../../CardPriceList/CardPriceList";
import iphone15 from "../../../assets/images/iphone_15.png";
import iphone14 from "../../../assets/images/iphone_14.png";
import iphone13 from "../../../assets/images/iphone_13.png";
import iphone12 from "../../../assets/images/iphone_12.png";
import iphone11 from "../../../assets/images/iphone_11.png";
import iphoneX from "../../../assets/images/iphone_XS.png";
import styles from "@/style/PriceList.module.css";
import Image from "next/image";
import newChangeImageMb from "@/assets/images/THU CU LEN DOI.png";
import newChangeImage from "@/assets/images/THU CU LEN DOI.png";
const products = [
  {
    productName: "iPhone 15 Pro Max",
    price: "29.800.000",
    imageUrl: iphone15,
  },
  {
    productName: "iPhone 14 Pro Max",
    price: "22.800.000",
    imageUrl: iphone14,
  },
  {
    productName: "iPhone 13 Pro Max",
    price: "17.600.000",
    imageUrl: iphone13,
  },
  {
    productName: "iPhone 12 Pro Max",
    price: "13.000.000",
    imageUrl: iphone12,
  },
  {
    productName: "iPhone 11 Pro Max",
    price: "10.000.000",
    imageUrl: iphone11,
  },
  {
    productName: "iPhone XS Max",
    price: "7.300.000",
    imageUrl: iphoneX,
  },
  {
    productName: "iPhone XS",
    price: "5.700.000",
    imageUrl: iphone15,
  },
  {
    productName: "iPhone XR",
    price: "4.500.000",
    imageUrl: iphone15,
  },

  // Add more products as needed
];

const PriceList: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#1d1d1f" }}>
      <Image
        src={newChangeImageMb}
        alt="Exclusive Offers"
        className={styles.imageWrapperMB}
      />
      <Image
        src={newChangeImage}
        alt="Exclusive Offers"
        className={styles.imageWrapper}
      />
      <div className={styles.priceListContainer}>
        <h2
          style={{
            color: " #d09e7b",
            fontWeight: "bold",
          }}
        >
          Bảng giá &quot;Trade-in&quot; tham khảo
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
