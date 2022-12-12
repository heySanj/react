import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    // Use state is empty initially (data doesn't need to be pulled from anywhere)
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    // Use an object if you want to store all data in one state instance
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    // Event data is automatically passed through to this function when it is called by onChange
    const titleChangeHandler = (event) => {
        // Save the entered title into the state values
        setEnteredTitle(event.target.value);

        // ************* IF USING SINGLE STATE / OBJECT METHOD ****************

        // To set a single data key in a state object:
        // -- 1. It needs to be returned from a function where the previous state is passed through
        //       (Because this operation is not instant and this method ensures that the latest information is used)
        // -- 2. You need to spread (...) the previous State data to keep it, otherwise it will be erased when setting a new value

        // setUserInput((prevState) => {
        //     return {...prevState, enteredDate: event.target.value}
        // })
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        // Prevent the default http submission method (which causes the page to reload)
        // We will handle the submission with javascript
        event.preventDefault();

        // Pull the data from the state
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        // Submit data and reset values
        props.onSaveExpenseData(expenseData)        

        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");

        props.hideForm()
    };

    const cancelHandler = () => {
        props.hideForm()
    }

    return (
        <form action="" className="expense-form" onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2023-12-31"
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={cancelHandler}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
