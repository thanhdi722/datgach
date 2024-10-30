/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Button, Form, Modal, Select, Spin } from "antd";
import "./ProductModalComponent4.scss";
import { Option } from "antd/es/mentions";
import { notification } from "antd";
import type { NotificationArgsProps } from "antd";

type NotificationPlacement = NotificationArgsProps["placement"];

const Context = React.createContext({ name: "Default" });
export interface ProductDataModal3 {
  id: number;
  name: string;
  url_key: string;
  modalOpen: boolean;
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
    img: string;
    price1: number;
    price2: number;
    price3: number;
  };
}

interface ProductModalProps {
  modalOpen: boolean;
  onCancelModal: () => void;
  selectedPrice: number;
  ProductUse: Product | null;
  tinhtrangmay: string;
  selectedProduct: ProductDataModal3 | null;
}

const ProductModal4: React.FC<ProductModalProps> = ({
  modalOpen,
  selectedProduct,
  onCancelModal,
  selectedPrice,
  ProductUse,
  tinhtrangmay,
}) => {
  return (
    <>
      <Modal
        visible={modalOpen}
        onCancel={onCancelModal}
        footer={null}
        // width={800}
        centered
      >
        <div className="productModal4-container">
          <div style={{ padding: "0px 0px 20px 0px" }}>
            <p className="title-thank">Cảm ơn bạn đã tham gia TRADE-IN</p>
            <p className="title-bl">
              Tại <strong>Bạch Long Mobile</strong>
            </p>
          </div>

          <div className="user">
            <h2 className="info-title">THÔNG TIN SẢN PHẨM CỦA BẠN</h2>
            <div className="info-title-2">
              <span>Tên sản phẩm:</span> <span>{ProductUse?.item?.name}</span>
            </div>
            <div className="info-title-2">
              <span>Giá Thu:</span>{" "}
              <span className="info-title-3">
                {new Intl.NumberFormat("vi-VN").format(selectedPrice)}VNĐ
              </span>
            </div>
            <div className="info-title-2">
              <span>{tinhtrangmay}</span>
            </div>
          </div>
          <div className="user">
            <h2 className="info-title">THÔNG TIN SẢN PHẨM BẠN LÊN ĐỜI</h2>
            <div className="info-title-2">
              <span>Tên sản phẩm: </span>

              <span>{selectedProduct?.name}</span>
            </div>
            <div className="info-title-2">
              <span>Giá Bán: </span>{" "}
              <span className="info-title-3">
                {new Intl.NumberFormat("vi-VN").format(
                  selectedProduct?.price_range.minimum_price.final_price
                    .value || 0
                )}
                VNĐ
              </span>
            </div>
            <div className="info-title-2">
              <span>Giá Trả Thêm: </span>{" "}
              <span className="info-title-3">
                {new Intl.NumberFormat("vi-VN").format(
                  (selectedProduct?.price_range.minimum_price.final_price
                    .value || 0) - selectedPrice // Fallback to 0
                )}
                VNĐ
              </span>
            </div>
          </div>
          <div style={{ padding: "20px 0px 0px 0px" }}>
            <h2 className="title-thank">Chúng tôi sẽ liên hệ bạn sớm nhất</h2>
            <h2 className="title-bl">
              <strong>Bạch Long Mobile</strong> xin cảm ơn
            </h2>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProductModal4;
