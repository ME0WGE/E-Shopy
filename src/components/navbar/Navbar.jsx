import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ currentMoney }) {
  return (
    <>
      <nav className="navbar">
        <h1 className="navbar-title">
          <span className="span-love">Love</span>Shop
        </h1>
        <h1 className="wallet">
          Wallet: <span>€{currentMoney}</span>
        </h1>
        <FontAwesomeIcon icon={faCartShopping} className="navbar-cart" />
      </nav>
    </>
  );
}
