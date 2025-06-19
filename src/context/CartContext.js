// src/context/CartContext.js
import React, { createContext, useReducer, useContext } from "react";
import cartReducer from "../reducer/cartReducer";

const CartContext = createContext();

const initialState = {
  cartItems: [],
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
