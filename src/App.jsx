import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Asosiy from "./components/asosiy/asosiy";
import Header from "./components/header/header";
import ProductById from "./components/products/productById";
import Basket from "./components/basket/basket";
import Footer from "./components/footer/footer";
import admin from "./components/admin/admin";
import Admin from "./components/admin/admin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="app">
          <Header />

          <main className="main-content">
            <Routes>
              <Route path={"/"} element={<Asosiy />} />
              <Route path="/products/:id" element={<ProductById />} />
              <Route path="/basket" element={<Basket />} />
              <Route path="/admin" element={<Admin/>} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;