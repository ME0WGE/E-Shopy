import "./product.css";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Product() {
  return (
    <>
      <div className="con">
        <div className="card">
          <div className="product-display">
            <img
              id="product-img"
              src="https://burst.shopifycdn.com/photos/jacket-in-blues_925x.progressive.jpg"
              alt=""
            />
          </div>
          <div className="card-content">
            <h1>Two Tone</h1>
            <h1>Nylon Jacket</h1>
            <div className="stock">
              <p>Availability:</p>
            </div>
            <div className="price">
              <p>price:</p>
              <h3>$59.00</h3>
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
                <FontAwesomeIcon icon={faHeart} />
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
