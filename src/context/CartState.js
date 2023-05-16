import React, { useEffect, useReducer } from "react";
import CartContext from "./CartContex";
import CartReducer from "./CartReducer";

// const getLocalCartData = () => {
//   let localCartData = localStorage.getItem("refershcart");
//   if (localCartData === []) {
//     return [];
//   } else {
//     return JSON.parse(localCartData);
//   }
// };
const initialState = {
  cart: [],
  totalprice: "",
  totalItems: "",
  quantity: 1,
  shipping_fee: 50,
};
function CartState({ children }) {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (item, amount) => {
    dispatch({ type: "ADD_TO_CART", payload: { item, amount } });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };
  useEffect(() => {
    dispatch({ type: "CART_TOTAL_ITEM" });
    dispatch({ type: "CART_TOTAL_PRICE" });
    localStorage.setItem("refershcart", JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartState;
