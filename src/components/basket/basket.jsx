import React, { useContext } from "react";
import "./basket.css";
import { BasketContext } from "../../context/basketContext";
import BasketProduct from "./basketProduct";
import emptyBasket from "../../images/basketempty.png";
import { Link } from "react-router-dom";

const Basket = () => {
  const { basket } = useContext(BasketContext)
  const { setBasket } = useContext(BasketContext);

  const deleteProduct = (id) => {
    const deleteItem = basket.filter((val) => {
      return val.id !== id;
    });

    setBasket(deleteItem);
  };

  return (
    <div className="container basket">
      <h2 className="basket-title">
        Your basket, <span>{basket.length}product</span>
      </h2>
      {basket.length >= 1 ? (
        <div className="basket-container">
          {basket.map((val) => {
            return (
              <BasketProduct
                key={val.id}
                id={val.id}
                title={val.title}
                image={val.image}
                description={val.description}
                material={val.material}
                size={val.size}
                finish={val.finish}
                color={val.color}
                price={val.price}
                deleteProduct={deleteProduct}
              />
            );
          })}
        </div>
      ) : (
        <div className="empty-div">
          <img src={emptyBasket} alt="" />
          <h2>Your cart is currently empty</h2>
          <Link to={"/"}>
            <button>Home page</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Basket;
