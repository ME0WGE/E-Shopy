import "./heart.css";

export default function Heart({
  size = 24,
  color = "blue",
  className = "",
  onClick,
}) {
  return (
    <div
      className={`heart ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
      }}
      onClick={onClick}
    ></div>
  );
}
