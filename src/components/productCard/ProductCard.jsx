import "./productCard.css";
import Heart from "../heart/Heart";
import { useState } from "react";

export default function ProductCard({
  title,
  quantity,
  price,
  money,
  setMoney,
  addToCart,
}) {
  const [selectedSize, setSelectedSize] = useState("xl");
  const [selectedColor, setSelectedColor] = useState("blue");

  const sizeMap = {
    xs: 16,
    s: 24,
    m: 32,
    l: 64,
    xl: 86,
    xxl: 128,
  };

  const colorMap = {
    blue: "#2196f3",
    black: "#222",
    orange: "#ff9800",
    grey: "#888",
    green: "#4caf50",
    yellow: "#ffeb3b",
    red: "#f44336",
    purple: "#9c27b0",
  };

  const handleBuy = () => {
    if (money >= price && quantity > 0) {
      setMoney(money - price);
      addToCart({
        title,
        price,
        size: selectedSize,
        color: selectedColor,
      });
    }
  };

  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="product-display">
            <Heart
              size={sizeMap[selectedSize]}
              color={colorMap[selectedColor]}
            />
          </div>
          <div className="card-content">
            <h1 className="h1-title">{title}</h1>
            <div className="quantity">
              <h4 className="h4-title">Quantity:</h4>
              <h3> {quantity}</h3>
            </div>
            <div className="price">
              <h4 className="h4-title">Price: </h4>
              <h3> €{price}</h3>
            </div>
            <div className="size-choices">
              <h4 className="h4-title">Sizes</h4>
              <div className="choices">
                {["xs", "s", "m", "l", "xl", "xxl"].map((size) => (
                  <div
                    key={size}
                    className={
                      size + (selectedSize === size ? " selected" : "")
                    }
                    onClick={() => setSelectedSize(size)}
                    style={{
                      cursor: "pointer",
                      fontWeight: selectedSize === size ? "bold" : "normal",
                    }}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
            <div className="color-choices">
              <h4 className="h4-title">Colors</h4>
              <div className="choices">
                {[
                  "blue",
                  "purple",
                  "orange",
                  "grey",
                  "green",
                  "yellow",
                  "red",
                ].map((color) => (
                  <div
                    key={color}
                    className={color}
                    style={{
                      backgroundColor: colorMap[color] || color,
                      border: selectedColor === color ? "2px solid #000" : "",
                      cursor: "pointer",
                    }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>
            <div className="btn-row">
              {/* <div id="shopping-cart-btn"></div> */}
              <button
                className="buy-btn"
                onClick={handleBuy}
                disabled={money < price || quantity === 0}
              >
                <h3>Buy</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
