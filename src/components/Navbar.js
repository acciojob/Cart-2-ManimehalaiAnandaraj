import React from "react";
import { useCart } from "../context/CartContext";

function Navbar() {
  const {
    state: { cartItems },
  } = useCart();

  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav>
      <h3>Cart (<span id="nav-cart-item-count">{itemCount}</span>)</h3>
      <p>useReducer</p>
    </nav>
  );
}

export default Navbar;
