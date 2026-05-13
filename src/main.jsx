import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import BasketProvider, { BasketContext } from "./context/basketContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BasketProvider>
      <App />
    </BasketProvider>
  </StrictMode>,
);
