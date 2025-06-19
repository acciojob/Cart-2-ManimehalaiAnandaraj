// src/components/Navbar.js
import React from "react";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const {
    state: { cartItems },
  } = useCart();

  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav>
      <h2>Cart App</h2>
      <div id="nav-cart-item-count">Cart ({totalCount})</div>
    </nav>
  );
};

export default Navbar;
