import classes from "./CartButton.module.css";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const CartButton = (props) => {
    const items = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();


    const initialValue = 0

    // Loop through the array of items and count the amount of each one
    const itemCount = items.reduce(
        (totalCount, itemObj) => totalCount + itemObj.amount,
        initialValue
    );

    const cartToggleHandler = (event) => {
        dispatch(cartActions.toggleCart());
    };

    return (
        <button className={classes.button} onClick={cartToggleHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>{itemCount}</span>
        </button>
    );
};

export default CartButton;
