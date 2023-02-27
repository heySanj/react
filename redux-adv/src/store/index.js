import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";
import uiReducer from "./uiSlice"

// Create a store (storage database)
// configureStore allows multiple reducers (better organisation)
const store = configureStore({
    reducer: {
        cart: cartReducer,
        ui: uiReducer
    }
});

// After exporting, you must provide the store at the top most level of the DOM
// (Wrap the <App> with <Provider> and link this store to the provider)
export default store;
