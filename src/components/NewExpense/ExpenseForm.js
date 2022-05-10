import { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm({ onNewExpenseSave, onCancel }) {
	const [title, setTitle] = useState("");
	const [amount, setAmount] = useState("");
	const [date, setDate] = useState("");

	const titleChangeHandler = (event) => {
		setTitle(event.target.value);
	};

	const amountChangeHandler = (event) => {
		setAmount(event.target.value);
	};

	const dateChangeHandler = (event) => {
		setDate(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const newExpenseData = {
			title: title,
			amount: +amount,
			date: new Date(date),
		};
		onNewExpenseSave(newExpenseData);

		setTitle("");
		setAmount("");
		setDate("");
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__control-container">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={title}
						onChange={titleChangeHandler}
					></input>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						value={amount}
						step="0.01"
						min="0.01"
						onChange={amountChangeHandler}
					></input>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2018-01-01"
						max="2022-12-31"
						onChange={dateChangeHandler}
						value={date}
					></input>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="button" onClick={onCancel}>
					Cancel
				</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
}
