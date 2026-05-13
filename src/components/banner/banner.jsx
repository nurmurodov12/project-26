import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <p className="banner-title">Premium Ceramic Collection</p>
      <h1>Elevate Your Space</h1>
      <p className="banner-subtitle">
        Discover handcrafted ceramic tiles that transform ordinary rooms into
        architectural masterpieces
      </p>
      <div className="banner-btns">
        <button className="banner-btns-first">
          Explore Collection<i class="fa-solid fa-arrow-right"></i>
        </button>
        <button className="banner-btns-second">View Catalog</button>
      </div>

      <div className="banner-statictics">
        <div className="banner-statictic">
          <h2>500+</h2>
          <p>Premium Designs</p>
        </div>
        <div className="banner-statictic">
          <h2>15</h2>
          <p>Years Experience</p>
        </div>
        <div className="banner-statictic">
          <h2>10k+</h2>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
