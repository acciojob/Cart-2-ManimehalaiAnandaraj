// src/components/CartList.js
import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

const CartList = () => {
  const {
    state: { cartItems },
    dispatch,
  } = useCart();

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  if (cartItems.length === 0) return <h2>Cart is currently empty</h2>;

  return (
    <div id="cart-items-list">
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <button id="clear-all-cart" onClick={() => dispatch({ type: "CLEAR_CART" })}>
        Clear Cart
      </button>
      <h3 id="cart-total-amount">Total: ${totalAmount.toFixed(2)}</h3>
    </div>
  );
};

export default CartList;
