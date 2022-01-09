import { useState } from "react";
import "./App.css";

function App() {
  const [storeItems, setStoreItems] = useState([
    {
      id: 1,
      name: "beetroot",
      price: 0.4,
      type: "vegetable",
    },
    {
      id: 2,
      name: "carrot",
      price: 0.3,
      type: "vegetable",
    },
    {
      id: 3,
      name: "apple",
      price: 0.7,
      type: "fruit",
    },
    {
      id: 4,
      name: "apricot",
      price: 0.9,
      type: "fruit",
    },
    {
      id: 5,
      name: "avocado",
      price: 3.5,
      type: "fruit",
    },
    {
      id: 6,
      name: "bananas",
      price: 1,
      type: "fruit",
    },
    {
      id: 7,
      name: "bell-pepper",
      price: 0.5,
      type: "vegetable",
    },
    {
      id: 8,
      name: "berry",
      price: 1.4,
      type: "fruit",
    },
    {
      id: 9,
      name: "blueberry",
      price: 1.5,
      type: "fruit",
    },
    {
      id: 10,
      name: "eggplant",
      price: 0.5,
      type: "vegetable",
    },
  ]);
  const [cart, setCart] = useState([]);

  function calculateTotal() {
    let total = 0;
    for (const item of cart) {
      total = total + item.price * item.quantity;
    }
    return total.toFixed(2);
  }

  function addZeros(number) {
    const str = "" + number;
    const pad = "000";
    return pad.substring(0, pad.length - str.length) + str;
  }

  function addToCart(item) {
    const itemFound = cart.find((cartItem) => item.id === cartItem.id);
    if (itemFound === undefined) {
      const newCartItem = {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1,
      };
      const updatedCart = [...cart, newCartItem];
      setCart(updatedCart);
    } else {
      increaseQuantity(item);
    }
  }

  function increaseQuantity(item) {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        cartItem.quantity++;
      }
      return cartItem;
    });
    setCart(updatedCart);
  }

  return (
    <div className="App">
      <header id="store">
        <h1>Grocero</h1>
        <ul className="item-list store--item-list">
          {storeItems.map((storeItem) => (
            <li key={storeItem.id}>
              <div className="store--item-icon">
                <img
                  src={`assets/icons/${addZeros(storeItem.id)}-${
                    storeItem.name
                  }.svg`}
                  alt={storeItem.name}
                />
              </div>
              <button onClick={() => addToCart(storeItem)}>Add to cart</button>
            </li>
          ))}
        </ul>
      </header>

      <main id="cart">
        <h2>Your Cart</h2>

        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cart.map((cartItem) => (
              <li key={cartItem.id}>
                <img
                  className="cart--item-icon"
                  src={`assets/icons/${addZeros(cartItem.id)}-${
                    cartItem.name
                  }.svg`}
                  alt={cartItem.name}
                />
                <p>{cartItem.name}</p>
                <button className="quantity-btn remove-btn center">-</button>
                <span className="quantity-text center">
                  {cartItem.quantity}
                </span>
                <button className="quantity-btn add-btn center">+</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>

          <div>
            <span className="total-number">£{calculateTotal()}</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
