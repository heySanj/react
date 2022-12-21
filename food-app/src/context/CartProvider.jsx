import React, { useReducer } from 'react';

import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

// This is the function that will actually Add/Remove items from the list of items
// Access it whenever you need to add/remove items (ie: The Meal Item submission form / Add to cart button)
const cartReducer = (state, action) => {

    if(action.type === 'ADD_ITEM'){
        // Concat returns a new array with the item added (rather than editing an existing array)
        // This is better for React, and lowers the chance of bugs
        const updatedItems = state.items.concat(action.item)
        const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount)
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    } else if(action.type === 'REMOVE_ITEM'){

    }

    return defaultCartState
}

// Cart Context Manager
const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = item => {
        dispatchCartAction({type: 'ADD_ITEM', item: item})
    };

    const removeItemToCartHandler = item => {
        dispatchCartAction({type: 'REMOVE_ITEM', id: item.id})
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
    }

    return (<CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>);
}
 
export default CartProvider;