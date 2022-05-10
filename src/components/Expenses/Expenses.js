import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

export default function Expenses({ data }) {
	const [selectedYear, setSelectedYear] = useState("2022");

	const fliterChangeHandler = (newYearFilter) => {
		setSelectedYear(newYearFilter);
	};

	const expensesForSelectedYear = data.filter(
		(expense) => expense.date.getFullYear().toString() === selectedYear
	);
	return (
		<Card className="expenses" testid="expenses1">
			<ExpenseFilter
				selectedYear={selectedYear}
				onYearChange={fliterChangeHandler}
			/>
			<ExpenseChart expenses={expensesForSelectedYear} />
			<ExpensesList expenses={expensesForSelectedYear} />
		</Card>
	);
}
