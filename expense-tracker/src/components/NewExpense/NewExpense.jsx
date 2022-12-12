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

    return (
        <Card className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </Card>
    );
};

export default NewExpense;
