import { useState } from "react";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense({ onSave }) {
	const [isEditing, setIsEditing] = useState(false);
	const newExpenseSaveHandler = (expenseData) => {
		const newExpense = {
			...expenseData,
			id: Math.random().toString(), //TODO change to UUID
		};
		onSave(newExpense);
		setIsEditing(false);
	};

	return (
		<Card className="new-expense">
			{!isEditing && (
				<button type="button" onClick={() => setIsEditing(true)}>
					Add New Expense
				</button>
			)}
			{isEditing && (
				<ExpenseForm
					onNewExpenseSave={newExpenseSaveHandler}
					onCancel={() => setIsEditing(false)}
				/>
			)}
		</Card>
	);
}
