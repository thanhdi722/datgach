/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { Modal, Spin } from "antd";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import "./upgrade-modal.scss";

interface Product {
  id: number;
  name: string;
  price: string;
  products: any[];
}

interface UpgradeModalProps {
  isModalOpen: boolean;
  selectedProduct: Product | null;
  handleCancel: () => void;
}

const query = `
 query getProducts(
  $search: String
  $filter: ProductAttributeFilterInput
  $sort: ProductAttributeSortInput
  $pageSize: Int
  $currentPage: Int
) {
  products(
    search: $search
    filter: $filter
    sort: $sort
    pageSize: $pageSize
    currentPage: $currentPage
  ) {
    items {
      ...ProductInterfaceField
    }
    total_count
    page_info {
      current_page
      page_size
      total_pages
    }  
  }
}
fragment ProductInterfaceField on ProductInterface {
  image {
    url
  }
  name
  id
  price_range {
    minimum_price {
      final_price {
        currency
        value
      }
    }
  }
  attributes {
    attribute_code
    value
  }
  categories {
    name
  }
}
`;

const variables = {
  filter: {
    category_uid: {
      eq: "Mjgy",
    },
  },
  pageSize: 20,
  currentPage: 1,
};

async function fetchProductData() {
  const response = await fetch("https://beta-api.bachlongmobile.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const data = await response.json();

  return data.data.products.items;
}

const UpgradeModal: React.FC<UpgradeModalProps> = ({
  isModalOpen,
  selectedProduct,
  handleCancel,
}) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["productData"],
    queryFn: fetchProductData,
    staleTime: 300000,
  });

  if (isLoading)
    return (
      <div className="loading">
        <Spin />
      </div>
    );
  if (error) return <div>Error loading data</div>;

  const filteredData = data.filter((product: any) => {
    const categoryName =
      product?.categories?.map((cat: any) => cat.name.toLowerCase()) || [];
    return categoryName.includes("iphone 16 series");
  });

  const handleProductClick = () => {
    handleCancel();
    const scrollToInfoTechnical = () => {
      const infoSection = document.querySelector(".container_info_technical");
      if (infoSection) {
        infoSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    const registerForm = document.getElementById("fromBuyPhone");
    if (registerForm) {
      registerForm.scrollIntoView({ behavior: "smooth" });
    }

    scrollToInfoTechnical();
  };

  return (
    <Modal
      title={
        <div
          style={{
            color: "#ff4d4f",
            fontSize: "20px",
            fontWeight: "bold",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          BẢNG GIÁ THAM KHẢO THU CŨ {selectedProduct?.name}
        </div>
      }
      open={isModalOpen}
      onCancel={handleCancel}
      className="modal"
      footer={null}
    >
      {selectedProduct && (
        <div className="modal-list">
          {filteredData.map((product: any) => {
            const buyupPrice = Number(selectedProduct.price);

            const finalPrice =
              product.price_range.minimum_price.final_price.value;

            const payMore = buyupPrice ? finalPrice - buyupPrice : null;

            return (
              <div
                className="modal-list-item"
                key={product.id}
                onClick={handleProductClick}
              >
                <div className="modal-list-item-img">
                  <Image
                    src={product?.image?.url}
                    width={1400}
                    height={1200}
                    quality={100}
                    alt={`product-${product.id}`}
                  />
                </div>
                <div className="modal-list-item-content">
                  <h4 className="modal-list-item-content-tt">{product.name}</h4>
                  <div className="modal-list-item-content-body">
                    <span className="modal-list-item-content-body-tt red-bg">
                      Giá dự kiến
                    </span>
                    <div className="modal-list-item-content-body-price">
                      {finalPrice.toLocaleString("vi-VN")}đ
                    </div>
                  </div>
                  <div className="modal-list-item-content-body">
                    <span className="modal-list-item-content-body-tt blue-bg">
                      Giá thu đến
                    </span>
                    <div className="modal-list-item-content-body-price">
                      <div className="modal-list-item-content-body-price">
                        {selectedProduct?.price
                          ? Number(selectedProduct.price).toLocaleString(
                              "vi-VN"
                            ) + "đ"
                          : "---"}
                      </div>
                    </div>
                  </div>
                  <div className="modal-list-item-content-body">
                    <span className="modal-list-item-content-body-tt yellow-bg">
                      Trả thêm
                    </span>
                    <div className="modal-list-item-content-body-price">
                      {payMore ? payMore.toLocaleString("vi-VN") : "---"}đ
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Modal>
  );
};

export default UpgradeModal;
