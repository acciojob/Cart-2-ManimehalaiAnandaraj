// src/CartItem.js
import React from "react";
import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { dispatch } = useCart();

  return (
    <div>
      <h3>{item.name}</h3>
      <p id={`cart-items-price-${item.id}`}>${item.price.toFixed(2)}</p>
      <div>
       
<button
  id={`decrement-btn-${item.id}`}
  onClick={() => dispatch({ type: "DECREMENT", payload: item.id })}
>
  Decrement
</button>
<span id={`cart-amount-${item.id}`}>{item.quantity}</span>
<button
  id={`increment-btn-${item.id}`}
  onClick={() => dispatch({ type: "INCREMENT", payload: item.id })}
>
  Increment
</button>
<button
  id={`cart-item-remove-${item.id}`}
  onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
>
  Remove
</button>

      </div>
    </div>
  );
};

export default CartItem;
