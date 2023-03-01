import { configureStore } from "@reduxjs/toolkit";
import showCartReducer from "./cart-slice";
import counterCartReducer from "./counter-cart-slice";

const store = configureStore({
  reducer: { showCart: showCartReducer, counterCart: counterCartReducer },
});

export default store;
