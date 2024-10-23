/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import "./BodyOldAutumn.scss";
import CardProduct from "../CardProductOldAutumn/CardProductOldAutumn";
import { Spin, Pagination } from "antd";
import ProductModal from "../ProductModalComponent1/ProductModalComponent1";
import iconSearch from "../../../../public/ic-search.png";
import noProducts from "../../../../public/img-no-pro-matching.webp";

export interface ProductData {
  id: number;
  name: string;
  url_key: string;
  image: {
    url: string;
  };
  price_range: {
    minimum_price: {
      final_price: {
        value: number;
        currency: string;
      };
    };
  };
}

export interface Product {
  item: {
    name: string;
    price1: number;
    price2: number;
    price3: number;
    img: string;
  };
  loaisp: string;
}

const BodyOldAutumn = () => {
  const [phoneCondition, setPhoneCondition] = useState("normal");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productType, setProductType] = useState<string>("Tất Cả");
  const [selectedPrice, setSelectedPrice] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>(""); // New state for search query
  const [productTypes, setProductTypes] = useState<string[]>([]); // State for product types
  const [activeButton, setActiveButton] = useState<string>("Tất Cả");

  const productTypeMapping: { [key: string]: string } = {
    PhuKienApple: "Phụ Kiện Apple", // Add more mappings as needed
    "Tất Cả": "Tất Cả",
    AppleWatch: "Apple Watch",
    // You can add other mappings here if necessary
  };

  const handleChange = (value: string) => {
    setProductType(value);
    setActiveButton(value || "Tất Cả");
  };

  const showModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setPhoneCondition("warranty_mobile");
  };

  useEffect(() => {
    if (selectedProduct) {
      handlePriceChange(phoneCondition);
    }
  }, [selectedProduct, phoneCondition]);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal2 = () => {
    setIsModalOpen(false); // Close the first modal
  };

  const fetchData = async (query = "") => {
    setLoading(true);
    try {
      const url = `https://script.google.com/macros/s/AKfycbyk9SIAxTIM--HkPzDuOYbWzplDnLC1n527jwOW4-0m-uHehJtjr_PcH8U1coh-4hs/exec?query=${query}`; // Add query parameter
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok && data.length > 0) {
        // Set filtered products based on search query
        setFilteredProducts(data);

        // Extract product types (this should not depend on search results)
        if (query === "") {
          // Only set product types when it's not a search
          const uniqueProductTypes = Array.from(
            new Set(data.map((product: Product) => product.loaisp))
          ).filter((type): type is string => typeof type === "string");
          setProductTypes(["Tất Cả", ...uniqueProductTypes]);
        }
      } else {
        setFilteredProducts([]);
        if (query === "") {
          setProductTypes(["Tất Cả"]); // Reset product types only when it's not a search
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setFilteredProducts([]);
      if (query === "") {
        setProductTypes(["Tất Cả"]); // Reset product types only when it's not a search
      }
    }
    setLoading(false);
  };

  // Fetch data initially
  useEffect(() => {
    fetchData();
  }, []);

  // Handle search
  const handleSearch = () => {
    fetchData(searchQuery); // Call API with the search query
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch(); // Trigger search when Enter is pressed
    }
  };

  useEffect(() => {
    setCurrentPage(1); // Reset to page 1
    setSearchQuery(""); // Clear search input
    handleSearch();
  }, [productType]);

  const itemsPerPage = 15; // Total products displayed per page

  // Filter products based on the selected product type
  const filteredByType =
    productType === "Tất Cả"
      ? filteredProducts
      : filteredProducts.filter((product) => product.loaisp === productType);

  // Get products for the current page
  const currentProducts = filteredByType.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePriceChange = (value: string) => {
    switch (value) {
      case "warranty_mobile":
        setSelectedPrice(selectedProduct?.item.price1 || 0); // price1
        break;
      case "warranty_scratch_light":
        setSelectedPrice(selectedProduct?.item.price2 || 0); // price2
        break;
      case "normal":
        setSelectedPrice(selectedProduct?.item.price3 || 0); // price3
        break;
      default:
        setSelectedPrice(selectedProduct?.item.price1 || 0); // Default to price1
    }
  };

  return (
    <div style={{ backgroundColor: "#FFFEED", padding: "20px 0" }}>
      <div className="container">
        <div className="BodyOldAutumn-card">
          <h2 className="BodyOldAutumn-title">
            THU CŨ ĐỔI MỚI - KHÔNG LO BÙ TIỀN
          </h2>
          <div className="search-container">
            <input
              type="text"
              placeholder="Tìm sản phẩm bạn cần thu cũ..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
              onKeyPress={handleKeyPress} // Trigger search on Enter key
            />
            <button className="search-button" onClick={handleSearch}>
              {" "}
              {/* Trigger search on button click */}
              <img src={iconSearch.src} alt="Search" />
            </button>
          </div>
          <div className="BodyOldAutumn-tab-button">
            {productTypes.map((type) => (
              <button
                key={type}
                className={`BodyOldAutumn-button ${
                  activeButton === type ? "active" : ""
                }`}
                onClick={() => handleChange(type)}
              >
                {productTypeMapping[type] || type}{" "}
                {/* Use mapping for display */}
              </button>
            ))}
          </div>

          {loading ? (
            <div
              className="loading container-spin flex items-center justify-center"
              style={{
                height: "300px",
              }}
            >
              <Spin />
            </div>
          ) : currentProducts.length === 0 ? (
            <div className="no-products-message">
              <img
                src={noProducts.src}
                alt="no-products"
                className="no-products-image"
              />
              <span>Không có sản phẩm</span>
            </div>
          ) : (
            <div className="BodyOldAutumn-tab-item">
              {currentProducts.map((product: any, index: number) => (
                <div key={index} onClick={() => showModal(product)}>
                  <CardProduct
                    name={product?.item.name}
                    image={product?.item.img}
                    price={Number(product?.item.price1)}
                  />
                </div>
              ))}
            </div>
          )}

          <Pagination
            style={{ padding: "20px 0", textAlign: "center", margin: "0 auto" }}
            align="center"
            current={currentPage}
            total={filteredByType.length}
            pageSize={itemsPerPage}
            onChange={(page) => setCurrentPage(page)} // Update current page
            showSizeChanger={false}
          />
        </div>
        <ProductModal
          visible={isModalOpen}
          onCancel={handleCancel}
          selectedProduct={selectedProduct}
          phoneCondition={phoneCondition}
          setPhoneCondition={setPhoneCondition}
          selectedPrice={selectedPrice}
          handleOpenModal2={handleOpenModal2}
          handlePriceChange={handlePriceChange} // Pass the function to handle price change
        />
      </div>
    </div>
  );
};

export default BodyOldAutumn;
