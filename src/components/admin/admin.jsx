import React, { PureComponent, useEffect, useState } from "react";
import "./admin.css";
import AdminProduct from "./adminProduct";

const Admin = () => {
  const [login, setLogin] = useState("");
  const [pasword, setPasword] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [material, setMaterial] = useState("");
  const [sizeWidth, setSizeWidth] = useState("");
  const [sizeHeight, setSizeHeight] = useState("");
  const [finish, setFinish] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");

  const [data, setData] = useState([]);
  const [incorrectLogin, setIncorrectLogin] = useState(false);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function dataApi() {
      setLoading(true);
      const response = await fetch(
        "https://69f7a559dd0c226688eddaed.mockapi.io/Products",
      );
      const resJson = await response.json();

      setData(resJson);
      setLoading(false);
    }

    dataApi();
  }, []);

  function submitLoginAndParol(e) {
    e.preventDefault();
    if (
      login.toLowerCase().trim() === "admin" &&
      pasword.trim() === "temur21"
    ) {
      setIsAuth(true);
    } else {
      setIncorrectLogin(true);
    }
  }

  const addObj = {
    title: title,
    image: image,
    description: description,
    material: material,
    size: {
      width: sizeWidth,
      height: sizeHeight,
    },
    finish: finish,
    color: color,
    price: price,
  };

  async function addNewProduct(e) {
    e.preventDefault();

    if (
      title !== "" &&
      image !== "" &&
      description !== "" &&
      material !== "" &&
      sizeWidth !== "" &&
      sizeHeight !== "" &&
      finish !== "" &&
      color !== "" &&
      price !== ""
    ) {
      await fetch("https://69f7a559dd0c226688eddaed.mockapi.io/Products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addObj),
      });

      setTitle("");
      setImage("");
      setDescription("");
      setMaterial("");
      setSizeHeight("");
      setSizeWidth("");
      setFinish("");
      setColor("");
      setPrice("");
    } else {
      alert("Please all the inputs fill");
    }
  }

  async function deleteProdcut(id) {
    const response = await fetch(
      `https://69f7a559dd0c226688eddaed.mockapi.io/Products/${id}`,
      {
        method: "DELETE",
      },
    );

    const resJson = await response.json();
  }

  async function editProduct(id) {
    const newProduct = prompt("Enter new value").toLowerCase();
    const which = prompt("Enter which").toLowerCase();

    await fetch(
      `https://69f7a559dd0c226688eddaed.mockapi.io/Products/${Number(id)}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          [which]: newProduct,
        }),
      },
    );
  }

  return (
    <div className="container admin">
      {isAuth ? (
        <div className="admin-container">
          <div className="admin-left">
            <h2 className="new-product-title">Enter new product</h2>
            <form className="new-product-form" onSubmit={addNewProduct}>
              <input
                className="new-input"
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                className="new-input"
                type="text"
                placeholder="Enter image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <input
                className="new-input"
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <input
                className="new-input"
                type="text"
                placeholder="Enter material"
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
              />
              <input
                className="new-input"
                value={sizeWidth}
                type="text"
                placeholder="Enter size for width"
                onChange={(e) => setSizeWidth(e.target.value)}
              />
              <input
                className="new-input"
                value={sizeHeight}
                type="text"
                placeholder="Enter size for height"
                onChange={(e) => setSizeHeight(e.target.value)}
              />
              <input
                className="new-input"
                value={finish}
                type="text"
                placeholder="Enter finish"
                onChange={(e) => setFinish(e.target.value)}
              />
              <input
                className="new-input"
                value={color}
                type="text"
                placeholder="Enter color"
                onChange={(e) => setColor(e.target.value)}
              />
              <input
                className="new-input"
                value={price}
                type="text"
                placeholder="Enter price"
                onChange={(e) => setPrice(e.target.value)}
              />
              <br />

              <button className="add-product">Add new product</button>
            </form>
          </div>

          <div className="admin-right">
            {loading ? <h1>Loading...</h1> : ""}
            {data.map((val) => {
              return (
                <div className="admin-product" key={val.id}>
                  <h3>{val.title}</h3>
                  <i
                    id="edit"
                    onClick={(e) => editProduct(val.id)}
                    class="fa-solid fa-pen-to-square"
                  ></i>
                  <p>${val.price}</p>

                  <i
                    className="fa-solid fa-trash-can"
                    onClick={() => deleteProdcut(val.id)}
                    id="delete"
                  ></i>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <>
          <form onSubmit={submitLoginAndParol} className="form-login-and-parol">
            <h2 className="login-title">Enter login and password</h2>
            <div class="group">
              <input
                onChange={(e) => setLogin(e.target.value)}
                class="input"
                type="text"
                placeholder="Login"
              />
            </div>
            <div class="group">
              <input
                onChange={(e) => setPasword(e.target.value)}
                class="input"
                type="password"
                placeholder="Password"
              />
            </div>
            {incorrectLogin ? (
              <p className="incorrect">Login or password incorrect</p>
            ) : (
              ""
            )}

            <button class="btn-class-name">
              <span class="back"></span>
              <span class="front"></span>
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Admin;
