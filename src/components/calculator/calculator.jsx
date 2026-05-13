import React from "react";
import "./calculator.css";
import calculatorImg from "../../images/calculatorImg.jpg";

const Calculator = () => {
  return (
    <div className="container calculator">
      <div className="calculator-left">
        <div className="calculator-title">
          <div className="planning">
            <i class="fa-solid fa-calculator"></i>
            <p>Planning Tool</p>
          </div>

          <h1 className="calculator-h1">Tile Calculator</h1>
          <p className="calculator-subtitle">
            Calculate exactly how many tiles you need for your project. Simply
            enter your room dimensions and select tile size for an accurate
            estimate.
          </p>
        </div>
        
        <div className="box-container">
          <div className="calculator-box">
            <p className="box-subtitle">Room Dimensions</p>

            <div className="box-height-width">
              <div className="box-div">
                <p className="box-div-p">Length (meters)</p>

                <div className="box-div-div">
                  <p>5.0</p>
                </div>
              </div>

              <div className="box-div">
                <p className="box-div-p">Width (meters)</p>

                <div className="box-div-div">
                  <p>4.0</p>
                </div>
              </div>
            </div>

            <div className="calculator-size">
              <p>Tile Size</p>

              <div className="sizes">
                <div>
                  <p>30x30 cm</p>
                </div>

                <div>
                  <p>30x60 cm</p>
                </div>

                <div className="active">
                  <p>30x30 cm</p>
                </div>

                <div>
                  <p>30x30 cm</p>
                </div>

                <div>
                  <p>30x30 cm</p>
                </div>
              </div>
            </div>
            
            <button className="box-btn">
              <p>Calculate Required Tiles</p>
            </button>
          </div>
        </div>
      </div>

      <div className="calculator-right">
        <img src={calculatorImg} alt="" />
      </div>
    </div>
  );
};

export default Calculator;
