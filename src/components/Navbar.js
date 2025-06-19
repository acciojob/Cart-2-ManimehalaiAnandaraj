// Navbar.js
import React from "react";
import { useCart } from "../context/CartContext";

function Navbar() {
  const {
    state: { cartItems },
  } = useCart();

  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav>
      <h3>Cart ({itemCount})</h3> {/* ✅ Must be exactly like this */}
    </nav>
  );
}

export default Navbar;
