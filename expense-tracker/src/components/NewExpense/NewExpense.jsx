import React, { useState } from 'react';

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {

        // Save the expense data returned from the Form Submission (and add an ID to the data object)
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString() // basic ID generation for testing
        }

        props.onAddExpense(expenseData)

    }


    const [formVisible, setFormVisible] = useState(false)

    const showFormHandler = () => {
        setFormVisible(true)
    }

    const hideFormHandler = () => {
        setFormVisible(false)
    }

    // Show the form if visible, Otherwise just show a button
    return (
        <Card className="new-expense">
            {formVisible
                ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} hideForm={hideFormHandler} />
                : <button onClick={showFormHandler}>Add New Expense</button>
            }
        </Card>
    );
};

export default NewExpense;
