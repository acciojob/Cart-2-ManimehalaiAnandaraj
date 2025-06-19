// src/reducer/cartReducer.js

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
  const exists = state.cartItems.find(item => item.id === action.payload.id);
  if (exists) {
    return {
      ...state,
      cartItems: state.cartItems.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    };
  } else {
    return {
      ...state,
      cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
    };
  }


    case "INCREMENT":
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };

    case "DECREMENT":
      return {
        ...state,
        cartItems: state.cartItems
          .map(item =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter(item => item.quantity > 0),
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };

    case "CLEAR_CART":
      return { ...state, cartItems: [] };

    default:
      return state;
  }
};

export default cartReducer;
