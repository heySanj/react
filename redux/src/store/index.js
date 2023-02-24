import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './counterSlice'
import authReducer from './authSlice'

// Create a store (storage database)
// configureStore allows multiple reducers (better organisation)
const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
});

// After exporting, you must provide the store at the top most level of the DOM
// (Wrap the <App> with <Provider> and link this store to the provider)
export default store;
