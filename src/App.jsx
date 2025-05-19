import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Panier from "./components/panier/Panier";
import Product from "./components/product/Product";
import Wallet from "./components/wallet/Wallet";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Products */}
      <div className="product-container">
        <Product />
      </div>
      <Wallet />
      <Panier/>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
