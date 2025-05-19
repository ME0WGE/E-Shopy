import { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Panier from "./components/panier/Panier";
import Product from "./components/product/Product";

function App() {
  const [money, setMoney] = useState(500);

  return (
    <>
      {/* Navbar */}
      <Navbar currentMoney={money} />
      {/* Products */}
      <div className="product-container">
        <Product money={money} setMoney={setMoney} />
      </div>
      {/* <Panier/> */}
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
