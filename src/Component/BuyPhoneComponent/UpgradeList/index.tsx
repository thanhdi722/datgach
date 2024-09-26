/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect } from "react";
import { Select, Spin } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "./upgrade.scss";
import UpgradeModal from "../UpgradeModal";
import { useQuery } from "@tanstack/react-query";
import thuculendoi from "../../../../public/Images/thuculendoi.webp";
export interface Product {
  id: number;
  name: string;
  price: string;
  products: any[];
}

const UpgradeList: React.FC = () => {
  const [selectedSeries, setSelectedSeries] = useState<string>("iphone15");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  const handleChange = (value: string) => {
    setSelectedSeries(value);
  };

  const showModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const fetchdata = async () => {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbz9mbHofFp5aVxWWZQMnvDDDcW0OKPjp6O17xtQ9IkPZ1EWGkWiDv1spMuQu1xOjM4/exec"
    );
    const data = await response.json();
    return data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["productListData"],
    queryFn: fetchdata,
    staleTime: 300000,
  });

  useEffect(() => {
    if (data) {
      const filtered = data.filter((product: any) => {
        const categoryName = product?.item?.category?.toLowerCase();

        if (!categoryName) return false;

        if (
          selectedSeries === "iphone13" &&
          categoryName.includes("iphone 13")
        ) {
          return true;
        }
        if (
          selectedSeries === "iphone14" &&
          categoryName.includes("iphone 14")
        ) {
          return true;
        }
        if (
          selectedSeries === "iphone15" &&
          categoryName.includes("iphone 15")
        ) {
          return true;
        }
        if (
          selectedSeries === "iphone11" &&
          categoryName.includes("iphone 11")
        ) {
          return true;
        }
        if (
          selectedSeries === "iphone12" &&
          categoryName.includes("iphone 12")
        ) {
          return true;
        }
        if (
          selectedSeries === "iphonexs" &&
          categoryName.includes("iphone xs")
        ) {
          return true;
        }
        return false;
      });

      setFilteredProducts(filtered);
    }
  }, [data, selectedSeries]);

  if (isLoading)
    return (
      <div className="loading">
        <Spin />
      </div>
    );
  if (error) return <div>Error loading data</div>;

  return (
    <div className="upgrade-list" style={{ backgroundColor: "black" }}>
      <div className="container">
        <Image
          src={thuculendoi}
          width={1820}
          height={1200}
          alt="thu-cu-len-doi"
          className="upgrade-list-img"
        />
        <div className="upgrade">
          <div className="upgrade-header">
            <h3 className="upgrade-header-tt">Lên đời iPhone 16 Series</h3>
            <Select
              defaultValue="iphone15"
              className="upgrade-select"
              onChange={handleChange}
              options={[
                { value: "iphone15", label: "iPhone 15 Series" },
                { value: "iphone14", label: "iPhone 14 Series" },
                { value: "iphone13", label: "iPhone 13 Series" },
                { value: "iphone12", label: "iPhone 12 Series" },
                { value: "iphone11", label: "iPhone 11 Series" },
                { value: "iphonexs", label: "iPhone XS Series" },
              ]}
              placeholder="Chọn dòng máy bạn đang dùng"
            />
          </div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView="auto"
            speed={1000}
            navigation
            breakpoints={{
              300: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              850: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
          >
            {filteredProducts.map((product: any, index: number) => (
              <SwiperSlide key={index}>
                <div
                  className="upgrade-item"
                  onClick={() =>
                    showModal({
                      id: product?.uid,
                      name: product?.item.name,
                      price: `${product?.item.price}`,
                      products: [],
                    })
                  }
                >
                  <div className="upgrade-item-img">
                    <Image
                      src={product?.item.img}
                      width={1400}
                      height={1200}
                      quality={100}
                      alt={`product-${index}`}
                    />
                  </div>
                  <div className="upgrade-item-content">
                    <h4 className="upgrade-item-content-tt">
                      {product?.item.name}
                    </h4>
                    <div className="upgrade-item-content-body">
                      <span className="upgrade-item-content-body-tt">
                        Giá thu cũ:{" "}
                      </span>
                      <div className="upgrade-item-content-body-price">
                        {Number(product?.item.price).toLocaleString("vi-VN") +
                          " VNĐ"}
                      </div>
                    </div>
                    <button
                      className="upgrade-item-content-button"
                      onClick={() => showModal(product)}
                    >
                      Xem giá đổi
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <UpgradeModal
        isModalOpen={isModalOpen}
        selectedProduct={
          selectedProduct
            ? {
                id: selectedProduct.id,
                name: selectedProduct.name,
                price: selectedProduct.price,
                products: [],
              }
            : null
        }
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default UpgradeList;
