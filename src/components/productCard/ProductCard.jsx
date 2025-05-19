import "./productCard.css";
import Heart from "../heart/Heart";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function ProductCard({ title, quantity, price }) {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="product-display">
            {/* <Heart
              size={liked ? 40 : 24}
              color={liked ? "hsl(178, 100%, 50%)" : "gray"}
              onClick={() => setLiked(!liked)}
            /> */}
          </div>
          <div className="card-content">
            <h1 className="h1-title">{title}</h1>
            <div className="quantity">
              <h4 className="h4-title">
                Quantity: <span className="quantity-span">{quantity}</span>
              </h4>
            </div>
            <div className="price">
              <h4 className="h4-title">Price: </h4>
              <h3> €{price}</h3>
            </div>
            <div className="size-choices">
              <h4 className="h4-title">Sizes</h4>
              <div className="choices">
                <div className="xs">xs</div>
                <div className="s">s</div>
                <div className="m">m</div>
                <div className="l">l</div>
                <div className="xl">xl</div>
                <div className="xxl">xxl</div>
              </div>
            </div>
            <div className="color-choices">
              <h4 className="h4-title">Colors</h4>
              <div className="choices">
                <div className="blue-black">
                  <div className="blue" />
                  <div className="black" />
                </div>
                <div className="orange-grey">
                  <div className="orange" />
                  <div className="grey" />
                </div>
                <div className="green-yellow">
                  <div className="green" />
                  <div className="yellow" />
                </div>
                <div className="red-black">
                  <div className="red" />
                  <div className="black" />
                </div>
              </div>
            </div>
            <div className="btn-row">
              <div id="shopping-cart-btn">
                {/* <FontAwesomeIcon icon={faHeart} /> */}
                <Heart
                  size={liked ? 40 : 24}
                  color={liked ? "hsl(178, 100%, 50%)" : "gray"}
                  onClick={() => setLiked(!liked)}
                />
              </div>
              <div id="buy-btn">
                <h3>Buy</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
