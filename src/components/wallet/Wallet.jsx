import "./wallet.css";

export default function Wallet({ currentMoney }) {
  return (
    <>
      <div className="wallet-container">
        <h2>Your Wallet: €{currentMoney}</h2>
      </div>
    </>
  );
}
