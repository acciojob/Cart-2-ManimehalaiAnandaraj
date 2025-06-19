import React from "react";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { state: { cartItems } } = useCart();

  // Calculate total quantity (sum of all items quantities)
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav>
      <h1>My Cart App</h1>
      <div id="nav-cart-item-count">{totalQuantity}</div>
      <p>useReducer</p>
    </nav>
  );
};

export default Navbar;
