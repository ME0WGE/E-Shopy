import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Product from "./components/product/Product";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Products */}
      <Product />
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
