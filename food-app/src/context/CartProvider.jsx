import React, { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

// This is the function that will actually Add/Remove items from the list of items
// Access it whenever you need to add/remove items (ie: The Meal Item submission form / Add to cart button)
const cartReducer = (state, action) => {
    if (action.type === "ADD_ITEM") {
        const updatedTotalAmount =
            state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );

        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        // If the item is already in the cart --> just add to its amount/qty
        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            // Else just add as a new item

            // Concat returns a new array with the item added (rather than editing an existing array)
            // This is better for React, and lowers the chance of bugs
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    } else if (action.type === "REMOVE_ITEM") {
        // Find the item with ID
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
        const existingCartItem = state.items[existingCartItemIndex];

        // update cart amount
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;

        let updatedItems;

        // Reduce qty/amount by 1
        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount - 1,
            };

            updatedItems = [...state.items];

            // If the amount drops below 1 --> remove the item from the array using splice
            if (updatedItem.amount < 1) {
                updatedItems.splice(existingCartItemIndex, 1);
            } else {
                updatedItems[existingCartItemIndex] = updatedItem;
            }
        } else {
            // Else Error?
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    return defaultCartState;
};

// Cart Context Manager
const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: "ADD_ITEM", item: item });
    };

    const removeItemToCartHandler = (id) => {
        dispatchCartAction({ type: "REMOVE_ITEM", id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
