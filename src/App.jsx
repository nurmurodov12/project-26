import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Asosiy from "./components/asosiy/asosiy";
import Header from "./components/header/header";
import ProductById from "./components/products/productById";
import Basket from './components/basket/basket';

function App() {

  return (
    
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Asosiy />} />
          <Route path="/products/:id" element={<ProductById />}></Route>
          <Route path="/basket" element={<Basket/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
