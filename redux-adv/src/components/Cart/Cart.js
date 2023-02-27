import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const Cart = (props) => {

    const items = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const cartItemRemoveHandler = (productID) => {
        dispatch(cartActions.removeItem(productID));
    }

    const cartItemAddHandler = (product) => {
        dispatch(cartActions.addItem({...product, amount: 1}));
    }

    const cartItems = (
        <ul>
            {items.map((item) => (
                <CartItem
                    key={item.id}
                    item={{
                        title: item.name,
                        quantity: item.amount,
                        price: item.price,
                        total: item.price * item.amount,
                    }}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>        
    );

    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            {cartItems}
        </Card>
    );
};

export default Cart;
