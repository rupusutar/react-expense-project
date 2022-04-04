import './ExpenseFilter.css';

export default function ExpenseFilter({selectedYear, onYearChange}) {

	const yearChangeHandler = event => {
		onYearChange(event.target.value);

	}
	return (
		<div className="expenses-filter">
			<div className="expenses-filter__controls">
				<label>Filter by year</label>
				<select value={selectedYear} onChange={yearChangeHandler}>
					<option value='2018'>2018</option>
					<option value='2019'>2019</option>
					<option value='2020'>2020</option>
					<option value='2021'>2021</option>
					<option value='2022'>2022</option>
				</select>
			</div>
		</div>
	);
}
