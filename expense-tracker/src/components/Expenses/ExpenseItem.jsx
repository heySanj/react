import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {

  const clickHandler = () => {
    // What to do when clicked
    console.log("clicked!")
  }

  return (
    // You can only return 1 root element! --> everything needs to be wrapped in a div
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>

      <button onClick={clickHandler}>Change Title</button>

    </Card>
  );
}

export default ExpenseItem;
