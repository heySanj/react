import { useContext } from 'react'

import classes from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartContext from '../../context/cart-context';

const Cart = (props) => {

    const cartCtx = useContext(CartContext)

    const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0

    const cartItems = (
        <ul>
            {cartCtx.items.map(
                (item) => (
                    <li key={item.id}>{item.name}</li>
                )
            )}
        </ul>
    );

    return (
        <Modal onCloseCart={props.onCloseCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>${totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;
