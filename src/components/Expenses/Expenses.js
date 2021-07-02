import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from './ExpensesChart';
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFiteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFiteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // Can store JSX content as variable
 
  // Keep JSX part as lean as possible
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
       <ExpensesChart expenses={filteredExpense}/>
       <ExpensesList items={filteredExpense} />
      </Card>
    </div>
  );
}

export default Expenses;
