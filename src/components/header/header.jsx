import React, { useContext } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { BasketContext } from './../../context/basketContext';

const Header = () => {

  const {basket} = useContext(BasketContext)
  
  return (
    <div className="container header">
      <div className="header-nav">
        <div className="nav-left">
          <h2>CERAMIQUE</h2>
          <ul>
            <Link to={"/"}>
              <li>
                Home
              </li>
            </Link>
            <li>
              <a href="">Catalog</a>
            </li>
            <li>
              <a href="">Calculator</a>
            </li>
            <li>
              <a href="">Visualizer</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
          </ul>
        </div>

        <Link to={"/basket"}>
          <div className="nav-right">
            <i class="fa-solid fa-cart-shopping"></i>
            <sup>{basket.length}</sup>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
