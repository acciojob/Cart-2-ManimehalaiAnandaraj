// Navbar.js
import React from "react";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const {
    state: { cartItems },
  } = useCart();

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav>
      <h1>useReducer</h1>
      <div>
        <span id="nav-cart-item-count">Cart ({totalCount})</span>
      </div>
    </nav>
  );
};

export default Navbar;
