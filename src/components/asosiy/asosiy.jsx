import React from "react";
import Banner from "../banner/banner";
import "./asosiy.css";
import Products from "./../products/products";
import Calculator from "../calculator/calculator";
import Perfection from "../perfection/perfection";

const Asosiy = () => {


  return (
    <div className="container asosiy">
      <Banner />
      <Products />
      <Calculator />
      <Perfection/>
    </div>
  );
};

export default Asosiy;
