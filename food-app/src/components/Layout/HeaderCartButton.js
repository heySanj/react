import { useContext, useEffect, useState } from "react";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../context/cart-context";

const HeaderCartButton = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;

    // The reduce function will loop over the array, adding up the total qty of items for each item
    // First argument is the calculation function (adding the amount of items to the counter)
    // Second argument is the starting number --> We start counting from 0
    const numberOfCartItems = items.reduce((totalQty, item) => {
        return totalQty + item.amount;
    }, 0);

    // Toggle button bump whenever item is added to cart --> (but on a timer)
    const btnClasses = `${classes.button} ${
        btnIsHighlighted ? classes.bump : ""
    }`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);
        
        // Toggle the bump class to FALSE after it is done playing
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        // Cleanup function --> Remove any active timers once they complete
        return () => {
            clearTimeout(timer)
        }

    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;
