// CartContext.js
import React, { createContext, useReducer, useContext } from "react";
import cartReducer from "../reducer/cartReducer"; // ✅ Make sure this is correct

const CartContext = createContext();

const initialState = {
  cartItems: []
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState); // ❗️ This is where the error is thrown

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
