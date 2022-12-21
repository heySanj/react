import { useContext } from 'react'

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from '../../context/cart-context';

const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext)

    // The reduce function will loop over the array, adding up the total qty of items for each item
    // First argument is the calculation function (adding the amount of items to the counter)
    // Second argument is the starting number --> We start counting from 0
    const numberOfCartItems = cartCtx.items.reduce((totalQty, item) => {
        return totalQty + item.amount
    }, 0)

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;
