import React from "react";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
    const price = `$${props.meal.price.toFixed(2)}`;

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
                <MealItemForm id={props.meal.id}/>
            </div>
        </li>
    );
};

export default MealItem;
