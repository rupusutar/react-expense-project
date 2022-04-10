import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

export default function ExpensesList({ expenses }) {
	return (
		<div>
			{expenses.length === 0 && (
				<h2 className="expenses-list__empty">Found No Expenses</h2>
			)}
			{expenses.length > 0 &&
				expenses.map((expense) => (
					<ExpenseItem
						key={expense.id}
						date={expense.date}
						title={expense.title}
						price={expense.amount}
					/>
				))}
		</div>
	);
}
