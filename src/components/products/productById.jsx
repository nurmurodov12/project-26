import React, { useActionState, useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";
import "./productById.css";

const ProductById = () => {
  const params = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const dataJson = async () => {
      setLoading(true);
      const response = await fetch(
        `https://69f7a559dd0c226688eddaed.mockapi.io/Products/${params.id}`,
      );
      const resJson = await response.json();
      setData([resJson]);
      setLoading(false);
    };

    dataJson();
  }, []);

  return (
    <div className="container by-id">
      {loading ? <h1>Loading...</h1> : ""}
      {data.map((val) => {
        return (
          <div className="by-id-div">
            <div className="by-id-img">
              <h1>{val.title}</h1>
              <img src={val.image} alt="" />
              <h2>{val.description}</h2>
            </div>

            <div className="by-id-info">
              <div className="infos">
                <div>
                  <p>Material</p>
                  <p>{val.material}</p>
                </div>

                <div>
                  <p>Size</p>
                  <p>
                    {val.size.width}x{val.size.height}
                  </p>
                </div>

                <div>
                  <p>Color</p>
                  <p>{val.color}</p>
                </div>

                <div>
                  <p>Finish</p>
                  <p>{val.finish}</p>
                </div>
              </div>

              <div className="by-id-prices">
                <h1>${val.price}</h1>
                <h3>${Math.floor(Math.random() * 100)}</h3>
              </div>

              <button>
                <p>Added bascket</p>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductById;
