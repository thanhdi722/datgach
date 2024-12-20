"use client";
import React, { useEffect, useState } from "react";
import { Modal, Radio } from "antd";
import Image from "next/image";
import "./ProductModalComponent1.scss";
import ProductModalComponent2 from "../ProductModalComponent2/ProductModalComponent2";
interface Product {
  item: {
    name: string;
    img: string;
    price1: number;
    price2: number;
    price3: number;
  };
}

interface ProductModalProps {
  visible: boolean;
  onCancel: () => void;
  selectedProduct: Product | null;
  phoneCondition: string;
  setPhoneCondition: (value: string) => void;
  selectedPrice: number;
  handleOpenModal2: () => void;
  handlePriceChange: (value: string) => void;
}

const ProductModal1: React.FC<ProductModalProps> = ({
  visible,
  onCancel,
  selectedProduct,
  phoneCondition,
  setPhoneCondition,
}) => {
  const [selectedPrice, setSelectedPrice] = useState<number>(0);
  const [isModalOpen2, setIsModalOpen2] = useState<boolean>(false);
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
  const phoneConditionDescriptions: { [key: string]: string } = {
    warranty_mobile:
      "[Loại 1] Máy hoạt động bình thường, Full chức năng, màn đẹp, thân máy đẹp, pin trên 95%,máy mua bachlong còn bảo hành , đạt tiêu chuẩn máy 99%.",
    warranty_scratch_light:
      "[Loại 2] Máy hoạt động bình thường, màn đẹp, thân máy trầy xước nhẹ Pin trên 89%,máy mua bachlong.",
  };
  const selectedConditionText =
    phoneConditionDescriptions[phoneCondition] || "";
  useEffect(() => {
    if (selectedProduct) {
      handlePriceChange(phoneCondition);
    }
  }, [selectedProduct, phoneCondition]);

  const handleOpenModal2 = () => {
    setIsModalOpen2(true);
    onCancel();
  };

  return (
    <>
      <Modal
        visible={visible}
        onCancel={onCancel}
        footer={null}
        width={800}
        centered
      >
        <h2 className="BodyOldAutumn-titleModal">
          CHƯƠNG TRÌNH THU CŨ ĐỔI MỚI
        </h2>
        {selectedProduct && (
          <div className="BodyOldAutumn-container">
            <div className="BodyOldAutumnM1-left-section">
              <Image
                src={selectedProduct.item.img}
                alt={selectedProduct.item.name}
                width={400}
                height={400}
              />
              <p style={{ padding: "10px 0" }}>{selectedProduct.item.name}</p>
            </div>
            <div className="BodyOldAutumn-right-section">
              <h4 className="BodyOldAutumn-titleModalRight">Thông tin máy</h4>
              <Radio.Group
                value={phoneCondition}
                onChange={(e) => {
                  setPhoneCondition(e.target.value);
                  handlePriceChange(e.target.value); // Update price when radio button changes
                }}
              >
                <Radio.Button
                  value="warranty_mobile"
                  style={{
                    height: "max-content",
                    width: "100%",
                    lineHeight: "unset",
                    marginBottom: "10px",
                    borderRadius: "5px",
                  }}
                >
                  [Loại 1] Máy hoạt động bình thường, Full chức năng, màn đẹp,
                  thân máy đẹp, pin trên 95%,máy mua bachlong còn bảo hành , đạt
                  tiêu chuẩn máy 99%.
                </Radio.Button>
                <Radio.Button
                  value="warranty_scratch_light"
                  style={{
                    height: "max-content",
                    width: "100%",
                    lineHeight: "unset",
                    marginBottom: "10px",
                    borderRadius: "5px",
                  }}
                >
                  [Loại 2] Máy hoạt động bình thường, màn đẹp, thân máy trầy
                  xước nhẹ Pin trên 89%,máy mua bachlong .
                </Radio.Button>
              </Radio.Group>

              <div className="BodyOldAutumn-price-section">
                <div className="BodyOldAutumn-estimated-price">
                  <p>Giá thu lại dự kiến:</p>
                  <button
                    className="BodyOldAutumn-btn-modal"
                    onClick={handleOpenModal2}
                  >
                    <p>Nâng cấp / Đổi máy (iPhone 16 Series)</p>
                    <p></p>
                    <p>{selectedPrice.toLocaleString()}đ</p>{" "}
                    {/* Selected price */}
                  </button>
                </div>
                <div className="BodyOldAutumn-note">
                  <p>
                    <strong>Lưu ý:</strong> Để biết giá thu cụ thể vui lòng mang
                    máy đến cửa hàng để được báo giá chính xác nhất.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
      <ProductModalComponent2
        modalOpen={isModalOpen2}
        selectedProduct={selectedProduct}
        onCancelModal={() => setIsModalOpen2(false)}
        selectedPrice={selectedPrice}
        tinhtrangmay={selectedConditionText}
      />
    </>
  );
};

export default ProductModal1;
