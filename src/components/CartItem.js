// src/components/CartItem.js
import React from "react";
import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { dispatch } = useCart();

  return (
    <div>
      <h3>{item.name}</h3>
      <p id={`cart-item-price-${item.id}`}>${item.price.toFixed(2)}</p>
      <div>
        <button
          id={`decrement-btn-${item.id}`}
          onClick={() => dispatch({ type: "DECREMENT", payload: item.id })}
        >
          -
        </button>
        <span id={`cart-amount-${item.id}`}>{item.quantity}</span>
        <button
          id={`increment-btn-${item.id}`}
          onClick={() => dispatch({ type: "INCREMENT", payload: item.id })}
        >
          +
        </button>
        <button id="cart-item-remove" onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
