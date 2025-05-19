import { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Panier from "./components/panier/Panier";
import Product from "./components/product/Product";
import data from "./data/data.json";

function App() {
  const [money, setMoney] = useState(500);
  const [cart, setCart] = useState([]);

  // Ajoute un state pour le stock de chaque produit
  const [stocks, setStocks] = useState(
    data.reduce((acc, prod) => {
      acc[prod.title] = prod.Quantity;
      return acc;
    }, {})
  );

  // Ajoute au panier et décrémente le stock
  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
    setStocks((prev) => ({
      ...prev,
      [item.title]: prev[item.title] - 1,
    }));
  };

  // Rembourse et réajoute le produit au stock
  const refundFromCart = (index) => {
    const item = cart[index];
    setCart((prev) => prev.filter((_, i) => i !== index));
    setStocks((prev) => ({
      ...prev,
      [item.title]: prev[item.title] + 1,
    }));
    setMoney((money) => money + item.price);
  };

  return (
    <>
      <Navbar currentMoney={money.toFixed(2)} />
      <div className="product-container">
        <Product
          money={money}
          setMoney={setMoney}
          addToCart={addToCart}
          stocks={stocks}
        />
      </div>
      <Panier cart={cart} refundFromCart={refundFromCart} />
      <Footer />
    </>
  );
}

export default App;
