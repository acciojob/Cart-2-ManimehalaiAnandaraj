// src/App.js
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import CartList from "./CartList";
import { CartProvider, useCart } from "../context/CartContext";

function DummyProductAdder() {
  const { dispatch } = useCart();
  const dummyProducts = [
    { id: 1, name: "Apple", price: 2.5 },
    { id: 2, name: "Banana", price: 1.5 },
  ];

  return dummyProducts.map(product => (
    <button
      key={product.id}
      onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}
    >
      Add {product.name}
    </button>
  ));
}

function AppWithContext() {
  const { dispatch } = useCart();

  useEffect(() => {
    dispatch({ type: "ADD_ITEM", payload: { id: 1, name: "Apple", price: 2.5 } });
    dispatch({ type: "ADD_ITEM", payload: { id: 2, name: "Banana", price: 1.5 } });
  }, [dispatch]);

  return (
    <div id="main">
      <Navbar />
      <DummyProductAdder />
      <CartList />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <AppWithContext />
    </CartProvider>
  );
}

export default App;
