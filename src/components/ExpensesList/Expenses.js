import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

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
			></ExpenseFilter>
			{expensesForSelectedYear.map((expense) => (
				<ExpenseItem
					key={expense.id}
					date={expense.date}
					title={expense.title}
					price={expense.amount}
				></ExpenseItem>
			))}
		</Card>
	);
}
