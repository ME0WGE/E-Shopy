import "./panier.css";
import Heart from "../heart/Heart";

export default function Panier({ cart, refundFromCart, setMoney }) {
  return (
    <div className="panier-container">
      <div className="panier">
        <h1>Cart:</h1>
        {/* Afficher les produits dans le panier */}
        {cart.length === 0 && <p>Your cart is empty.</p>}
        {cart.map((item, index) => (
          <div
            key={index}
            className="panier-item"
            
          >
            <Heart
              //   size={{ xs: 16, s: 24, m: 32, l: 64, xl: 86, xxl: 128 }[item.xs]}
              color={
                {
                  blue: "#2196f3",
                  black: "#222",
                  orange: "#ff9800",
                  grey: "#888",
                  green: "#4caf50",
                  yellow: "#ffeb3b",
                  red: "#f44336",
                  purple: "#9c27b0",
                }[item.color]
              }
            />
            <span>
              {item.title} ({item.size}, {item.color}) - €{item.price}
            </span>
            <button
              onClick={() => {
                refundFromCart(index);
                setMoney((money) => money + item.price);
              }}
              style={{ marginLeft: "1rem" }}
            >
              Refund
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
