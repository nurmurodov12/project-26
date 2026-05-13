import React, { use, useEffect, useState } from "react";
import "./products.css";
import Product from "./product";

const Products = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [loading, setLoading] = useState(false);

  const [selectedSize, setSelectedSize] = useState("All size");
  const [selectedColor, setSelectedColor] = useState("All colors");
  const [selectedMaterial, setSelectedMaterial] = useState("All material");

  const options = ["All size", "60x60", "30x60", "60x120", "30x30"];
  const material = ["All material", "Marble", "Stone", "Porcelain", "Ceramic"];
  const color = ["All colors", "White", "Black", "Grey", "Beige"];

  let [data, setData] = useState([]);
  let [fakerData, setFakerData] = useState([]);

  useEffect(() => {
    const dataJson = async () => {
      setLoading(true);
      const response = await fetch(
        "https://69f7a559dd0c226688eddaed.mockapi.io/Products",
      );
      const resJson = await response.json();
      setData(resJson);
      setFakerData(resJson);
      setLoading(false);
    };

    dataJson();
  }, []);

  const [filteredLingth, setFilteredLingth] = useState(false);
  useEffect(() => {
    let filtered = fakerData;

    if (selectedSize !== "All size") {
      filtered = filtered.filter((val) => {
        return `${val.size.width}x${val.size.height}` === selectedSize;
      });
    } else if (selectedColor === "All size") {
      setData(filtered);
    }

    if (selectedColor !== "All colors") {
      filtered = filtered.filter((val) => {
        return val.color === selectedColor;
      });
    } else if (selectedColor === "All colors") {
      setData(filtered);
    }

    if (selectedMaterial !== "All material") {
      filtered = filtered.filter((val) => {
        return val.material === selectedMaterial;
      });
    }

    setData(filtered);
  }, [selectedColor, selectedMaterial, selectedSize, fakerData]);

  // console.log(data);

  return (
    <div className="container products">
      <div className="products-title">
        <h1>Product Catalog</h1>
        <p>Filter by your preferences to find the perfect tile</p>
      </div>

      <div className="products-catalog">
        <div className="select">
          <p>Size (cm)</p>
          <div className="select-header" onClick={() => setOpen(!open)}>
            {selectedSize}
          </div>

          {open && (
            <div className="select-dropdown">
              {options.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedSize(item);
                    setOpen(false);
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="select">
          <p>Color</p>
          <div className="select-header" onClick={() => setOpen1(!open1)}>
            {selectedColor}
          </div>

          {open1 && (
            <div className="select-dropdown">
              {color.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedColor(item);
                    setOpen1(false);
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="select">
          <p>Material</p>
          <div className="select-header" onClick={() => setOpen2(!open2)}>
            {selectedMaterial}
          </div>

          {open2 && (
            <div className="select-dropdown">
              {material.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedMaterial(item);
                    setOpen2(false);
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="products-container">
        {loading ? <h1>Loading...</h1> : ""}
        {data.map((val) => {
          return (
            <Product
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
            />
          );
        })}
      </div>
      <div className="last-div">
        <p>Showing 12 of 12 tiles</p>
      </div>
    </div>
  );
};

export default Products;
