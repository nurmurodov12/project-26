import React from "react";
import { preconnect } from "react-dom";

const BasketProduct = ({
  id,
  title,
  image,
  description,
  material,
  size,
  finish,
  color,
  price,
  deleteProduct
}) => {
   
  return (
    <div className="basket-product">
      <div className="basket-box">
        <div className="box-img">
          <h2 className="basket-product-title">{title}</h2>
          <img src={image} alt="" />
        </div>

        <div className="box-info">
          <div className="box-info-top">
            <p>{description}</p>
          </div>

          <div className="box-info-bottom">
            <p>
              Material:<span>{material}</span>
            </p>
            <p>
              Size:{" "}
              <span>
                {size.width}x{size.height}
              </span>
            </p>
            <p>
              Finish: <span>{finish}</span>
            </p>
            <p>
              Color: <span>{color}</span>
            </p>
          </div>
        </div>

        <div className="box-prices">
          <div className="delete" onClick={() => deleteProduct(id)}>
            <i class="fa-solid fa-trash"></i>
            <p>Destroy</p>
          </div>

          <h3>
            ${price} <span className="first">${Math.floor(Math.random() * 100)}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BasketProduct;
