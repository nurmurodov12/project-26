import React from "react";
import Banner from "../banner/banner";
import "./asosiy.css";
import Products from './../products/products';
import Calculator from "../calculator/calculator";

const Asosiy = () => {
  return (
    <div className="container asosiy">
      <Banner />
      <Products />      
      <Calculator/>
    </div>
  );
};

export default Asosiy;
