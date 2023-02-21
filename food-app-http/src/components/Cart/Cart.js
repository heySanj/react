import { useContext } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import BasicForm from "./BasicForm";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import useHttp from "../../hooks/use-http";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const { isLoading, error, sendRequest: sendOrderRequest } = useHttp();

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const cartItems = (
        <ul className={classes["cart-items"]}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );

    const clearCart = () => {
        props.onClose()
    }


    const submitOrderHandler = async (user) => {
        sendOrderRequest(
            {
                url: "https://react-learn-114fb-default-rtdb.firebaseio.com/food-app/orders.json",
                method: "POST",
                body: {...user, items: cartCtx.items},
                headers: {
                    "Content-Type": "application/json",
                },
            },
            clearCart
        );

    };

    // Print out information for the user if content is still loading/errored out
    let content = <p></p>;

    if (error) {
        content = <p>{error}</p>;
    }

    if (isLoading) {
        content = <p>Sending Order...</p>;
    }


    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>

            <hr></hr>
            <br></br>

            <BasicForm
                closeHandler={props.onClose}
                submitHandler={submitOrderHandler}
                hasItems={hasItems}
                classActions={classes.actions}
                classButton={classes.button}
                classButtonAlt={classes["button--alt"]}
            />

            {content}

        </Modal>
    );
};

export default Cart;
