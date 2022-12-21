import React, { useContext } from "react";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../context/cart-context";

const MealItem = (props) => {

    const cartCtx = useContext(CartContext)

    const price = `$${props.meal.price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.meal.id,
            name: props.meal.name,
            amount: amount,
            price: props.meal.price
        })
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.meal.name}</h3>
                <p className={classes.description}>
                    {props.meal.description}
                </p>
                <span className={classes.price}>{price}</span>
            </div>
            <div>
                <MealItemForm id={props.meal.id} onAddToCart={addToCartHandler} />
            </div>
        </li>
    );
};

export default MealItem;
