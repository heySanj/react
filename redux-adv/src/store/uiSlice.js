import { createSlice } from "@reduxjs/toolkit";

// ======================== CART SLICE ====================================

const initialCartState = { cartVisible: false, notification: null };

const uiSlice = createSlice({
    name: "ui",
    initialState: initialCartState,
    reducers: {
        toggleCart(state) {
            state.cartVisible = !state.cartVisible;
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            };
        },
    },
});

// Export the slice
export default uiSlice.reducer;

// Export the action
export const uiActions = uiSlice.actions;
