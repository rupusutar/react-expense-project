import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense({ onSave }) {
	const newExpenseSaveHandler = (expenseData) => {
		const newExpense = {
			...expenseData,
			id: Math.random().toString(), //TODO change to UUID
		};
		onSave(newExpense);
	};

	return (
		<Card className="new-expense">
			<ExpenseForm onNewExpenseSave={newExpenseSaveHandler} />
		</Card>
	);
}
