import "./CardList.css";

function CartList(props) {
  return (
    <div className="cart--item-list-container">
      <ul className="item-list cart--item-list">
        {props.cart.map((cartItem) => (
          <li key={cartItem.id}>
            <img
              className="cart--item-icon"
              src={`assets/icons/${props.addZeros(cartItem.id)}-${
                cartItem.name
              }.svg`}
              alt={cartItem.name}
            />
            <p>{cartItem.name}</p>
            <button
              className="quantity-btn remove-btn center"
              onClick={() => {
                props.removeFromCart(cartItem);
              }}
            >
              -
            </button>
            <span className="quantity-text center">{cartItem.quantity}</span>
            <button
              className="quantity-btn add-btn center"
              onClick={() => props.addToCart(cartItem)}
            >
              +
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CartList;
