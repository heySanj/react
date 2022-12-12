import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
    }

    return (
        <ul className="expenses-list">
            {
                //Create a component for each item in expenses
                props.items.map((expense) => (
                    <ExpenseItem
                        key={expense.id} // To avoid bugs with rendering lists/data
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))
            }
        </ul>
    );
};

export default ExpensesList;
