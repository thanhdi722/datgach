import React, { useState } from "react";
import { Modal } from "antd";
interface info {
  name: string;
  phone: string;
  product: string;
  storage: string;
  color: string;
}
export default function ModalInfo({
  name,
  phone,
  product,
  color,
  storage,
}: info) {
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <div>
      <Modal
        title="Vertically centered modal dialog"
        centered
        open={modal2Open}
        onCancel={() => setModal2Open(false)}
      >
        <p>Name: {name}</p>
        <p>Phone: {phone}</p>
        <p>Product: {product}</p>
        <p>Color: {color}</p>
        <p>Storage: {storage}</p>
      </Modal>
    </div>
  );
}
