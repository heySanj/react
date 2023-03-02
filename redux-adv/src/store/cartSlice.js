import { createSlice } from "@reduxjs/toolkit";

// ======================== CART SLICE ====================================

const initialCartState = { items: [], changed: false };

const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        replaceCart(state,action){
            state.items = action.payload
        },
        addItem(state, action) {

            // Update changed so that new items can be pushed to the server
            state.changed = true;

            // Check to see if the item is already in the cart
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );
            const existingCartItem = state.items[existingCartItemIndex];

            if (existingCartItem) {
                existingCartItem.amount += action.payload.amount;
            } else {
                // Add the item to the cart
                state.items.push({ ...action.payload });
            }

            // Print the cart
            // console.log(current(state.items));
        },
        removeItem(state, action) {

            // Update changed so that new items can be pushed to the server
            state.changed = true;

            // Find the item using the payload ID
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.payload
            );
            const existingItem = state.items[existingCartItemIndex];

            // IF there is only 1 of the item, remove the item from cart
            if (existingItem.amount <= 1) {
                state.items = state.items.filter(
                    (item) => item !== existingItem
                );

                // Otherwise, just reduce the amount by 1
            } else {
                existingItem.amount--;
            }
        },
    },
});



// Export the slice
export default cartSlice.reducer;

// Export the action
export const cartActions = cartSlice.actions;

