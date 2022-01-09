import "./Total.css";

function Total(props) {
  return (
    <div className="total-section">
      <div>
        <h3>Total</h3>
      </div>

      <div>
        <span className="total-number">£{props.calculateTotal()}</span>
      </div>
    </div>
  );
}
export default Total;
