import { createContext, useState } from "react";

export const BasketContext = createContext();

import React from "react";

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    setBasket([...basket, product]);
  };

  return (
    <BasketContext.Provider value={{ basket, setBasket,addToBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
