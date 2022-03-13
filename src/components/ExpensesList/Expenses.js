import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card'

export default function Expenses({data}){
    return(
        <Card className='expenses' testid='expenses1'>
        {
            data.map(expense => 
            <ExpenseItem 
                key={expense.id}
                date= {expense.date}
                title={expense.title}
                price={expense.amount}
            >
            </ExpenseItem>)
        }
        </Card>
    )
}