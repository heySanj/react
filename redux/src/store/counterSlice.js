import { createSlice } from "@reduxjs/toolkit";

// ======================== COUNTER SLICE ====================================

const initialCounterState = { counter: 0, showCounter: true };

// A Redux Toolkit method that organises the store into smaller slices (similar to useReducer)
// STATE MUTATIONS ARE ALLOWED! Because Toolkit can recognise when you are mutating the state and corrects it
const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
        // Arguments send through an action will be in the .payload key
        count(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        },
    },
});



// Export the slice
export default counterSlice.reducer;

// Export the dispatch actions methods
export const counterActions = counterSlice.actions;