"use client";
import React, { useState } from "react";
import "./styleform.css";
import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { Tooltip } from "antd";
// interface Product {
//   name:{
//     name: string;
//     installment: string;
//     imageUrl: string;
//     storageOptions: object;
//     colorOptions: object;
//   }

// }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const products: any = {
  "iPhone 16 Pro Max": {
    id: 1,
    name: "iPhone 16 Pro Max",
    installment: "2,300,000d / tháng",
    storageOptions: {
      "256GB": {
        Trắng: {
          price: 34190000,
        },
        "Sa mạc": {
          price: 34190000,
        },
        "Màu tự nhiên": {
          price: 34190000,
        },
        Đen: {
          price: 34190000,
        },
      },
      "512GB": {
        Trắng: {
          price: 39690000,
        },
        "Sa mạc": {
          price: 39690000,
        },
        "Màu tự nhiên": {
          price: 39690000,
        },
        Đen: {
          price: 39690000,
        },
      },
      "1TB": {
        Trắng: {
          img: "/Images/iPhone_16_Pro_White_Titanium.jpg",
          codeColor: "rgb(251, 247, 244)",
          price: 45990000,
        },

        "Sa mạc": {
          img: "/Images/iPhone_16_Pro_Desert_TitaniumI.jpg",
          codeColor: "rgb(255, 218, 185)",
          price: 45690000,
        },
        "Màu tự nhiên": {
          img: "/Images/iPhone_16_Pro_Natural_Titanium.jpg",
          codeColor: "rgb(250, 235, 215)",
          price: 45990000,
        },
        Đen: {
          img: "/Images/iPhone_16_Pro_Black_Titanium.jpg",
          codeColor: "rgb(60, 64, 66)",
          price: 45690000,
        },
      },
    },
    colorOptions: {
      Trắng: {
        img: "/Images/iphone/iphone16_WhitePro.png",
        codeColor: "rgb(251, 247, 244)",
      },
      "Sa mạc": {
        img: "/Images/iphone/iphone16_desert.png",
        codeColor: "rgb(255, 218, 185)",
      },
      "Màu tự nhiên": {
        img: "/Images/iphone/iphone16_titan.png",
        codeColor: "rgb(250, 235, 215)",
      },
      Đen: {
        img: "/Images/iphone/iphone16_BlackPro.png",
        codeColor: "rgb(60, 64, 66)",
      },
    },
  },
  "iPhone 16 Pro": {
    id: 2,
    name: "iPhone 16 Pro",
    installment: "2,565,487d / tháng",
    storageOptions: {
      "128GB": {
        Trắng: {
          price: 27690000,
        },
        "Sa mạc": {
          price: 27690000,
        },
        "Màu tự nhiên": {
          price: 27690000,
        },
        Đen: {
          price: 27690000,
        },
      },
      "256GB": {
        Trắng: {
          price: 30690000,
        },
        "Sa mạc": {
          price: 30690000,
        },
        "Màu tự nhiên": {
          price: 30690000,
        },
        Đen: {
          price: 30690000,
        },
      },
      "512GB": {
        Trắng: {
          price: 36690000,
        },
        "Sa mạc": {
          price: 36690000,
        },
        "Màu tự nhiên": {
          price: 36690000,
        },
        Đen: {
          price: 36690000,
        },
      },
      "1TB": {
        Trắng: {
          price: 42690000,
        },
        "Sa mạc": {
          price: 42690000,
        },
        "Màu tự nhiên": {
          price: 42690000,
        },
        Đen: {
          price: 42690000,
        },
      },
    },
    colorOptions: {
      Trắng: {
        img: "/Images/iphone/iphone16_WhitePro.png",
        codeColor: "rgb(251, 247, 244)",
      },
      "Sa mạc": {
        img: "/Images/iphone/iphone16_desert.png",
        codeColor: "rgb(255, 218, 185)",
      },
      "Màu tự nhiên": {
        img: "/Images/iphone/iphone16_titan.png",
        codeColor: "rgb(250, 235, 215)",
      },
      Đen: {
        img: "/Images/iphone/iphone16_BlackPro.png",
        codeColor: "rgb(60, 64, 66)",
      },
    },
  },
  "iPhone 16 Plus": {
    id: 3,
    name: "iPhone 16 Plus",
    installment: "2,565,487d / tháng",
    storageOptions: {
      "128GB": {
        Trắng: {
          price: 24690000,
        },
        Đen: {
          price: 24690000,
        },
        Hồng: {
          price: 24690000,
        },
        "Xanh lưu ly": {
          price: 24690000,
        },
        "Xanh mồng két": {
          price: 24690000,
        },
      },
      "256GB": {
        Trắng: {
          price: 27690000,
        },
        Đen: {
          price: 27690000,
        },
        Hồng: {
          price: 27690000,
        },
        "Xanh lưu ly": {
          price: 27590000,
        },
        "Xanh mồng két": {
          price: 27690000,
        },
      },
      "512GB": {
        Trắng: {
          price: 33690000,
        },
        Đen: {
          price: 33690000,
        },
        Hồng: {
          price: 33690000,
        },
        "Xanh lưu ly": {
          price: 33590000,
        },
        "Xanh mồng két": {
          price: 33690000,
        },
      },
    },
    colorOptions: {
      Trắng: {
        img: "/Images/iphone/iphone16_White.png",
        codeColor: "rgb(251, 247, 244)",
      },
      Đen: {
        img: "/Images/iphone/iphone16_Black.png",
        codeColor: "rgb(60, 64, 66)",
      },
      Hồng: {
        img: "/Images/iphone/iphone16_Pink.png",
        codeColor: "rgb(255, 110, 180)",
      },
      "Xanh lưu ly": {
        img: "/Images/iphone/iphone16_blue.png",
        codeColor: "rgb(72, 118, 255)",
      },
      "Xanh mồng két": {
        img: "/Images/iphone/iphone16_Green.png",
        codeColor: "rgb(176, 212, 210)",
      },
    },
  },
  "iPhone 16 ": {
    id: 4,
    name: "iPhone 16 Pro",
    installment: "2,565,487d / tháng",
    storageOptions: {
      "128GB": {
        Trắng: {
          price: 21690000,
        },
        Đen: {
          price: 21690000,
        },
        Hồng: {
          price: 21690000,
        },
        "Xanh lưu ly": {
          price: 21690000,
        },
        "Xanh mồng két": {
          price: 21690000,
        },
      },
      "256GB": {
        Trắng: {
          price: 24690000,
        },
        Đen: {
          price: 24690000,
        },
        Hồng: {
          price: 24690000,
        },
        "Xanh lưu ly": {
          price: 24690000,
        },
        "Xanh mồng két": {
          price: 24690000,
        },
      },
      "512GB": {
        Trắng: {
          price: 30690000,
        },
        Đen: {
          price: 30690000,
        },
        Hồng: {
          price: 30690000,
        },
        "Xanh lưu ly": {
          price: 30690000,
        },
        "Xanh mồng két": {
          price: 30690000,
        },
      },
    },
    colorOptions: {
      Trắng: {
        img: "/Images/iphone/iphone16_White.png",
        codeColor: "rgb(251, 247, 244)",
      },
      Đen: {
        img: "/Images/iphone/iphone16_Black.png",
        codeColor: "rgb(60, 64, 66)",
      },
      Hồng: {
        img: "/Images/iphone/iphone16_Pink.png",
        codeColor: "rgb(255, 110, 180)",
      },
      "Xanh lưu ly": {
        img: "/Images/iphone/iphone16_blue.png",
        codeColor: "rgb(72, 118, 255)",
      },
      "Xanh mồng két": {
        img: "/Images/iphone/iphone16_Green.png",
        codeColor: "rgb(176, 212, 210)",
      },
    },
  },
  // Add other products here
};

export default function FormMain() {
  const [selectedProduct, setSelectedProduct] = useState("iPhone 16 Pro Max");
  const defaultStorage = Object.keys(
    products["iPhone 16 Pro Max"].storageOptions
  )[0];
  const [selectedStorage, setSelectedStorage] = useState(defaultStorage);
  const [selectedColor, setSelectedColor] = useState("Trắng");
  const [selectedValue, setSelectedValue] = useState("a");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleProductChange = (product: any) => {
    console.log("check product", product);
    setSelectedProduct(product);
    const storageKeys = Object.keys(products[product].storageOptions);
    // console.log("check store >>>",products[selectedProduct]?.storageOptions[selectedStorage].toLocaleString());
    setSelectedStorage(storageKeys[0]);
    const colorKeys = Object.keys(products[product].colorOptions);
    //
    setSelectedColor(colorKeys[0]);
  };
  const handleStorageChange = (storage: string) => {
    setSelectedStorage(storage);
    console.log(
      "check storage",
      products[selectedProduct]?.storageOptions[selectedStorage]
    );
  };
  const handleColorsChange = (color: string) => {
    setSelectedColor(color);
    console.log(
      "check giá color",
      products[selectedProduct]?.storageOptions[selectedStorage]?.[
        selectedColor
      ]?.price?.toLocaleString()
    );
    console.log("check color", products[selectedProduct].colorOptions[color]);
    console.log(
      "cnheck pic",
      products[selectedProduct].colorOptions[selectedColor].img
    );
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      name,
      phone,
      email,
      product: selectedProduct,
      storage: selectedStorage,
      color: selectedColor,
      price:
        products[selectedProduct]?.storageOptions[selectedStorage]?.[
          selectedColor
        ]?.price?.toLocaleString(),
    };

    try {
      const response = await fetch("https://api.example.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Response from API:", result);
      } else {
        console.error("Failed to submit data");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };
  return (
    <div
      id="registerForm"
      style={{ backgroundColor: "#1d1d1f", padding: "20px 0" }}
    >
      <div>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
          integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
          crossOrigin="anonymous"
        />
        <div className="modal clearfix">
          <div className="modal-product">
            <div className="product">
              {/* Slideshow container */}
              <Box
                className="product-slideshow"
                sx={{
                  marginBottom: 20,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "black",
                    marginBottom: 5,
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "5px",
                  }}
                >
                  <Image
                    alt={selectedProduct}
                    src={
                      products[selectedProduct].colorOptions[selectedColor].img
                    }
                    width={200}
                    height={200}
                  />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Grid container spacing={2} sx={{ marginLeft: 2 }}>
                    {Object.keys(products).map((product, index) => (
                      <Grid key={index} item>
                        <Button
                          sx={{
                            background:
                              selectedProduct === product
                                ? "linear-gradient(90deg, #d09e7b, #f3eae6)"
                                : "#ffff",
                            color: "#000",
                            marginRight: "10px",
                            borderRadius: "22px",
                            width: "122px",
                            fontSize: 10,
                            "&:hover": {
                              color:
                                selectedColor === product ? "#000" : "#ec1b26",
                              backgroundColor:
                                selectedColor === product ? "#fff" : "#fff",
                            },
                          }}
                          key={product}
                          onClick={() => handleProductChange(product)}
                        >
                          {product}
                        </Button>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
                {/* Lựa chọn dung lượng */}
                <Box
                  sx={{ display: "flex", flexDirection: "row", marginTop: 2 }}
                >
                  <Grid container spacing={2}>
                    {Object.keys(products[selectedProduct].storageOptions).map(
                      (storage, index) => (
                        <Grid item key={index}>
                          <Button
                            sx={{
                              background:
                                selectedStorage === storage
                                  ? "linear-gradient(90deg, #d09e7b, #f3eae6)"
                                  : "#ffff",
                              color: "#000",
                              marginRight: "3px",
                              borderRadius: "22px",
                              fontSize: 12,
                              "&:hover": {
                                color:
                                  selectedColor === storage
                                    ? "#000"
                                    : "#ec1b26",
                                backgroundColor:
                                  selectedColor === storage ? "#fff" : "#fff",
                              },
                            }}
                            key={storage}
                            onClick={() => handleStorageChange(storage)}
                          >
                            {storage}
                          </Button>
                        </Grid>
                      )
                    )}
                  </Grid>
                </Box>
                <Box
                  sx={{ display: "flex", flexDirection: "row", marginTop: 2 }}
                >
                  <Grid container>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                      sx={{ display: "flex", flexDirection: "row" }}
                    >
                      {Object.keys(products[selectedProduct].colorOptions).map(
                        (color, index) => (
                          <Grid
                            item
                            key={index}
                            sx={{
                              marginLeft: 0,
                              marginBottom: 1,
                              textAlign: "center",
                            }}
                          >
                            <FormControlLabel
                              label=""
                              value={color}
                              control={
                                <Tooltip
                                  placement="top"
                                  title={color}
                                  style={{
                                    color: "black !important",
                                    backgroundColor: "white",
                                  }}
                                >
                                  <Radio
                                    {...controlProps("e")}
                                    checked={selectedColor === color}
                                    onChange={() => handleColorsChange(color)}
                                    sx={{
                                      marginLeft: 2,
                                      color:
                                        products[selectedProduct].colorOptions[
                                          color
                                        ].codeColor,
                                      "&.Mui-checked": {
                                        color:
                                          products[selectedProduct]
                                            .colorOptions[color].codeColor,
                                      },
                                    }}
                                  />
                                </Tooltip>
                              }
                            >
                              {/* {color} */}
                            </FormControlLabel>
                            {/* <Typography
                              variant="body2"
                              sx={{ marginTop: 1, color: "white" }}
                            >
                            
                            </Typography> */}
                          </Grid>
                        )
                      )}
                    </RadioGroup>
                  </Grid>
                </Box>
                {/* Hiển thị giá và trả góp */}
                <Box>
                  <Typography
                    sx={{ color: "#fff", fontWeight: 40, fontSize: 20 }}
                  >
                    Giá dự kiến:{" "}
                    <span style={{ color: "red" }}>
                      {products[selectedProduct]?.storageOptions[
                        selectedStorage
                      ]?.[selectedColor]?.price?.toLocaleString()}
                      đ
                    </span>
                  </Typography>
                  <Typography sx={{ color: "#fff", fontWeight: 20 }}>
                    Trả góp chỉ từ:{" "}
                    <span>{products[selectedProduct].installment}</span>
                  </Typography>
                </Box>
              </Box>
            </div>
            <div className="round-shape" />
          </div>
          <div className="modal-info">
            <div className="info">
              <h2>Đăng ký đặt iPhone 16 Series</h2>
              <form onSubmit={handleSubmit}>
                <ul className="form-list">
                  <li className="form-list-row">
                    <div className="user">
                      <label htmlFor="#">Họ và tên</label>
                      <br />
                      <i
                        className="fas fa-user"
                        style={{ color: "white", fontSize: 20 }}
                      />
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={{ color: "#fff" }}
                      />
                    </div>
                  </li>
                  <li className="form-list-row">
                    <div className="number">
                      <label htmlFor="#">Số điện thoại</label>
                      <br />
                      <i
                        className="far fa-address-book	"
                        style={{ color: "white", fontSize: 20 }}
                      />
                      <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        style={{ color: "#fff" }}
                      />
                    </div>
                  </li>
                  <li className="form-list-row clearfix">
                    <div className="number">
                      <label htmlFor="#">Email</label>
                      <br />
                      <i className="far fa-credit-card" />
                      <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ color: "#fff" }}
                      />
                    </div>
                  </li>
                </ul>
                <button type="submit">Đặt hàng</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-MB" style={{ backgroundColor: "#1d1d1f" }}>
        <div className="modal-product">
          <div className="product">
            {/* Slideshow container */}
            <Box
              className=""
              sx={{
                marginBottom: 20,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid container style={{ height: "170px" }}>
                <Grid item sm={6}>
                  <Box
                    sx={{
                      marginBottom: 5,
                      display: "flex",
                      justifyContent: "center",
                      borderRadius: "5px",
                    }}
                  >
                    <Image
                      alt={selectedProduct}
                      src={
                        products[selectedProduct].colorOptions[selectedColor]
                          .img
                      }
                      width={150}
                      height={150}
                    />
                  </Box>
                </Grid>
                <Grid item sm={6}>
                  <Box sx={{ marginTop: 5 }}>
                    <Typography
                      sx={{ color: "#fff", fontWeight: 40, fontSize: 16 }}
                    >
                      Giá dự kiến:{" "}
                      <span style={{ color: "red" }}>
                        {products[selectedProduct]?.storageOptions[
                          selectedStorage
                        ]?.[selectedColor]?.price?.toLocaleString()}
                        đ
                      </span>
                    </Typography>
                    <Typography sx={{ color: "#fff", fontSize: 14 }}>
                      Trả góp chỉ từ:{" "}
                      <span style={{ color: "#fff", fontSize: 12 }}>
                        {products[selectedProduct].installment}
                      </span>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Grid container spacing={2} sx={{ marginLeft: 4 }}>
                  {Object.keys(products).map((product, index) => (
                    <Grid key={index} item style={{ marginTop: "-8px" }}>
                      <Button
                        sx={{
                          background:
                            selectedProduct === product
                              ? "linear-gradient(90deg, #d09e7b, #f3eae6)"
                              : "#ffff",
                          color: "#000",
                          marginRight: "10px",
                          borderRadius: "22px",
                          width: "122px",
                          fontSize: 10,
                          "&:hover": {
                            color:
                              selectedColor === product ? "#000" : "#ec1b26",
                            backgroundColor:
                              selectedColor === product ? "#fff" : "#fff",
                          },
                        }}
                        key={product}
                        onClick={() => handleProductChange(product)}
                      >
                        {product}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              {/* Lựa chọn dung lượng */}
              <Box
                sx={{ display: "flex", flexDirection: "row", marginTop: 0.5 }}
              >
                <Grid container spacing={2}>
                  {Object.keys(products[selectedProduct].storageOptions).map(
                    (storage, index) => (
                      <Grid item key={index}>
                        <Button
                          sx={{
                            background:
                              selectedStorage === storage
                                ? "linear-gradient(90deg, #d09e7b, #f3eae6)"
                                : "#ffff",
                            color: "#000",
                            marginRight: "3px",
                            borderRadius: "22px",
                            fontSize: 12,
                            "&:hover": {
                              color:
                                selectedColor === storage ? "#000" : "#ec1b26",
                              backgroundColor:
                                selectedColor === storage ? "#fff" : "#fff",
                            },
                          }}
                          key={storage}
                          onClick={() => handleStorageChange(storage)}
                        >
                          {storage}
                        </Button>
                      </Grid>
                    )
                  )}
                </Grid>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", marginTop: 2 }}>
                <Grid container>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    sx={{ display: "flex", flexDirection: "row" }}
                  >
                    {Object.keys(products[selectedProduct].colorOptions).map(
                      (color, index) => (
                        <Grid
                          item
                          key={index}
                          sx={{
                            marginLeft: 0,
                            marginBottom: 1,
                            textAlign: "center",
                          }}
                        >
                          <FormControlLabel
                            label=""
                            value={color}
                            control={
                              <Tooltip
                                placement="top"
                                title={color}
                                style={{
                                  color: "black !important",
                                  backgroundColor: "white",
                                }}
                              >
                                <Radio
                                  {...controlProps("e")}
                                  checked={selectedColor === color}
                                  onChange={() => handleColorsChange(color)}
                                  sx={{
                                    marginLeft: 2,
                                    color:
                                      products[selectedProduct].colorOptions[
                                        color
                                      ].codeColor,
                                    "&.Mui-checked": {
                                      color:
                                        products[selectedProduct].colorOptions[
                                          color
                                        ].codeColor,
                                    },
                                  }}
                                />
                              </Tooltip>
                            }
                          >
                            {/* {color} */}
                          </FormControlLabel>
                          {/* <Typography
                              variant="body2"
                              sx={{ marginTop: 1, color: "white" }}
                            >
                            
                            </Typography> */}
                        </Grid>
                      )
                    )}
                  </RadioGroup>
                </Grid>
              </Box>
              <div className="">
                <div className="info">
                  <h2
                    style={{
                      color: "#fff",
                      fontWeight: 400,
                      fontSize: 20,
                      padding: "0px 0px",
                      textAlign: "center",
                    }}
                  >
                    Đăng ký đặt iPhone 16 Series
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <ul className="form-list">
                      <li className="form-list-row">
                        <div className="user">
                          <label
                            style={{ color: "#fff", fontSize: 14 }}
                            htmlFor="#"
                          >
                            Họ và tên:
                          </label>
                          <br />
                          {/* <i
                              className="fas fa-user"
                              style={{ color: "white", fontSize: 20 }}
                            /> */}
                          <input
                            type="text"
                            className="input-formMB"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            style={{ color: "#000" }}
                          />
                        </div>
                      </li>
                      <li className="form-list-row">
                        <div className="number">
                          <label
                            style={{ color: "#fff", fontSize: 14 }}
                            htmlFor="#"
                          >
                            Số điện thoại:
                          </label>
                          <br />
                          {/* <i
                              className="far fa-address-book	"
                              style={{ color: "white", fontSize: 20 }}
                            /> */}
                          <input
                            type="text"
                            value={phone}
                            className="input-formMB"
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            style={{ color: "#000" }}
                          />
                        </div>
                      </li>
                      <li className="form-list-row clearfix">
                        <div className="number">
                          <label
                            style={{ color: "#fff", fontSize: 14 }}
                            htmlFor="#"
                          >
                            Email:
                          </label>
                          <br />
                          {/* <i className="far fa-credit-card" /> */}
                          <input
                            type="text"
                            value={email}
                            className="input-formMB"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{ color: "#000" }}
                          />
                        </div>
                      </li>
                    </ul>
                    <button
                      style={{
                        color: "#fff",
                        padding: "6px 10px",
                        borderRadius: "10px",
                        border: "none",
                        backgroundColor: "red",
                        margin: "10px auto",
                        display: "block",
                        justifyContent: "center",
                        fontSize: 16,
                        fontWeight: 600,
                      }}
                      type="submit"
                    >
                      Đặt hàng
                    </button>
                  </form>
                </div>
              </div>
            </Box>
          </div>
          <div className="round-shape" />
        </div>
      </div>
    </div>
  );
}
