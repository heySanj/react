import React, { useState } from "react";


import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState("All");

    const filterYearHandler = (year) => {
        setFilteredYear(year);
    };

    let expenses = props.items;
    
    // Set year filer
    if (filteredYear !== "All") {
        expenses = expenses.filter(
            (expense) => expense.date.getFullYear().toString() === filteredYear
        );
    }


    return (
        <Card className="expenses">
            <ExpensesFilter
                selectedYear={filteredYear}
                onYearSelect={filterYearHandler}
            />            
            <ExpensesList items={expenses} year={filteredYear} />
        </Card>
    );
};

export default Expenses;
