import React from "react";
import "./perfection.css";
import rightImg from "../../images/rightImg.jpg";

const Perfection = () => {
  return (
    <div className="container perfection">
      <div className="perfection-left">
        <img src={rightImg} alt="" />
      </div>

      <div className="perfection-right">
        <h1>Crafted for Perfection</h1>
        <p className="fisrt-p">
          For over 15 years, we've been dedicated to bringing the finest ceramic
          and porcelain tiles to architects, designers, and homeowners who
          demand nothing but excellence.
        </p>

        <p className="second-p">
          Every tile in our collection is carefully selected for its quality,
          durability, and aesthetic appeal. We work directly with master
          craftsmen and leading manufacturers to ensure you receive products
          that stand the test of time.
        </p>

        <div className="perfection-statisctic">
          <div className="statistic">
            <h3>500+</h3>
            <p>Unique Designs</p>
          </div>

          <div className="statistic">
            <h3>50+</h3>
            <p>Countries Served</p>
          </div>

          <div className="statistic">
            <h3>10k+</h3>
            <p>Projects Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfection;
