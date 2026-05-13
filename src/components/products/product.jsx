import React from "react";
import { Link } from "react-router-dom";
import "./products.css";
import { useContext } from "react";
import { BasketContext } from './../../context/basketContext';

const Product = ({
  id,
  title,
  image,
  description,
  material,
  size,
  finish,
  color,
  price,
}) => {
  const basketObj = {
    id: id,
    title: title,
    image: image,
    description: description,
    material: material,
    size: size,
    finish: finish,
    color: color,
    price: price,
  };

  const { addToBasket } = useContext(BasketContext)

  return (
    <div className="product">
      <div className="product-top">
        <Link to={`/products/${id}`}>
          <img src={image} alt="" />
        </Link>
        <div className="product-material">
          <p>{material}</p>
        </div>

        <div className="product-bottom">
          <h2 className="product-title">{title}</h2>
          <p className="product-description">{description}</p>

          <div className="product-sizes">
            <div>
              <p className="product-size-text">Size</p>
              <p className="product-size">
                {size.width}x{size.height} cm
              </p>
            </div>

            <div>
              <p className="product-size-text">Finish</p>
              <p className="product-size">{finish}</p>
            </div>

            <div>
              <p className="product-size-text">Color</p>
              <p className="product-size">{color}</p>
            </div>
          </div>

          <div className="product-prices">
            <div className="product-prices-left">
              <h2>${price}</h2>
              <p className="first">per sqm</p>
              <p className="second">
                {Math.floor(Math.random() * 10)} tiles/box ·{" "}
                {Math.floor(Math.random() * 10).toFixed(2)} sqm/box
              </p>
            </div>

            <div className="product-prices-right">
              <button onClick={() => addToBasket(basketObj)}>
                <i className="fa-solid fa-cart-plus"></i>Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
