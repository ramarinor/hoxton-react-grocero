import "./Cart.css";
import CartList from "./CartList/CartList";
import Total from "./Total/Total";

function Cart(props) {
  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <CartList
        cart={props.cart}
        addZeros={props.addZeros}
        removeFromCart={props.removeFromCart}
        addToCart={props.addToCart}
      />
      <Total calculateTotal={props.calculateTotal} />
    </main>
  );
}
export default Cart;
