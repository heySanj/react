import { createSlice } from "@reduxjs/toolkit";

// ======================== AUTH SLICE ====================================

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
    name: "authentication",
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        },
    },
});

// Export the slice
export default authSlice.reducer;

// Export the action
export const authActions = authSlice.actions;