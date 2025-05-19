import ProductCard from "../productCard/ProductCard";
import "./product.css";
import data from "../../data/data.json";

export default function Product({ money, setMoney }) {
  return (
    <>
      {data.map((Product, index) => (
        <ProductCard
          key={index}
          title={Product.title}
          quantity={Product.Quantity}
          price={Product.Price}
          money={money}
          setMoney={setMoney}
        />
      ))}
    </>
  );
}
