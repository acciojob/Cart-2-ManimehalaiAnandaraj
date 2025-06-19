<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>

// src/App.js
import React from "react";
import Navbar from "./Navbar";
import CartList from "./CartList";
import { CartProvider , useCart } from "../context/CartContext";

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

function App() {
  return (
    <CartProvider>
      <div id="main">
        <Navbar />
        <DummyProductAdder />
        <CartList />
      </div>
    </CartProvider>
  );
}

export default App;
