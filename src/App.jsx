import { useState } from "react";
import "./App.css";
import Cart from "./Cart/Cart";
import Store from "./Store/Store";

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
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  function calculateTotal() {
    let total = 0;
    for (const item of cart) {
      total = total + item.price * item.quantity;
    }
    return total.toFixed(2);
  }

  function getSelecetedStoreItems() {
    if (filter === "all") {
      return storeItems;
    } else {
      return storeItems.filter(function (storeItem) {
        return storeItem.type === filter;
      });
    }
  }

  function addZeros(number) {
    const str = "" + number;
    const pad = "000";
    return pad.substring(0, pad.length - str.length) + str;
  }

  function addToCart(item) {
    const updatedCart = [...cart];
    const itemFound = updatedCart.find((cartItem) => item.id === cartItem.id);
    if (itemFound === undefined) {
      const newCartItem = {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1,
      };
      updatedCart.push(newCartItem);
    } else {
      itemFound.quantity++;
    }
    setCart(updatedCart);
  }
  function removeFromCart(item) {
    let updatedCart = [...cart];
    const itemFound = updatedCart.find((cartItem) => {
      return cartItem.id === item.id;
    });
    itemFound.quantity--;
    if (itemFound.quantity <= 0) {
      updatedCart = updatedCart.filter(
        (cartItem) => cartItem.id !== itemFound.id
      );
    }

    setCart(updatedCart);
  }
  const storeItemsToDisplay = getSelecetedStoreItems();

  switch (sortBy) {
    case "alphabetAsc":
      storeItemsToDisplay.sort(function (firstItem, secondItem) {
        if (firstItem.name > secondItem.name) {
          return 1;
        }
        if (firstItem.name < secondItem.name) {
          return -1;
        }
        return 0;
      });
      break;
    case "alphabetDesc":
      storeItemsToDisplay.sort(function (firstItem, secondItem) {
        if (firstItem.name > secondItem.name) {
          return -1;
        }
        if (firstItem.name < secondItem.name) {
          return 1;
        }
        return 0;
      });
      break;
    case "priceAsc":
      storeItemsToDisplay.sort(function (firstItem, secondItem) {
        return firstItem.price - secondItem.price;
      });
      break;
    case "priceDesc":
      storeItemsToDisplay.sort(function (firstItem, secondItem) {
        return secondItem.price - firstItem.price;
      });
      break;
    default:
      storeItemsToDisplay.sort(function (firstItem, secondItem) {
        return firstItem.id - secondItem.id;
      });
      break;
  }

  return (
    <div className="App">
      <Store
        storeItemsToDisplay={storeItemsToDisplay}
        setFilter={setFilter}
        setSortBy={setSortBy}
        addZeros={addZeros}
        addToCart={addToCart}
      />
      <Cart
        cart={cart}
        addZeros={addZeros}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
        calculateTotal={calculateTotal}
      />
    </div>
  );
}

export default App;
