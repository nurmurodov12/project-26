import React, { useContext, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { BasketContext } from "../../context/basketContext";

const Header = () => {
  const { basket } = useContext(BasketContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-nav">
        <h2 className="logo">CERAMIQUE</h2>

        {/* DESKTOP NAV */}
        <div className="nav-left">
          <ul>
            <Link to={"/"}>
              <li>Home</li>
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

        {/* DESKTOP USERS */}
        <div className="nav-users">
          <Link to={"/basket"}>
            <div className="nav-right">
              <i className="fa-solid fa-cart-shopping"></i>
              <sup>{basket.length}</sup>
            </div>
          </Link>

          <Link to={"/admin"}>
            <i className="fa-solid fa-user"></i>
          </Link>
        </div>

        {/* BURGER */}
        <div
          className="burger-nav"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="fa-solid fa-bars"></i>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="mobile-nav">
            <div
              className="close-menu"
              onClick={() => setIsMenuOpen(false)}
            >
              ✕
            </div>

            <ul className="mobile-nav-info">
              <Link to={"/"}>
                <li>Home</li>
              </Link>

              <li>Catalog</li>
              <li>Calculator</li>
              <li>Visualizer</li>
              <li>About</li>
            </ul>

          </div>
        )}
      </div>
    </header>
  );
};

export default Header;