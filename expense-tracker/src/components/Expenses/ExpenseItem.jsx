// import React, { useState } from 'react';

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";



const ExpenseItem = (props) => {

  // // React Hook that allows statefulness (reloading component on value changes)
  // // useState returns an array, so we desctructure it
  // // --- The first item in the array is the variable value
  // // --- The second item is a function to change that variable
  // const [title, setTitle] = useState(props.title)

  // // What to do when clicked
  // const clickHandler = () => {
  //   // setTitle will change the value and tell React to re-evaluate any components that use the value
  //   setTitle("Clicked")
  // }

  return (
    // You can only return 1 root element! --> everything needs to be wrapped in a div
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>

      {/* <button onClick={clickHandler}>Change Title</button> */}

    </Card>
  );
}

export default ExpenseItem;
