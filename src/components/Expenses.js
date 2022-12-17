import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from './Card';

function Expenses(props) {
    let array = []
    for (let i = 0; i < props.num; i += 1) {
        array.push(<ExpenseItem date={props.expense[i].date} title={props.expense[i].title} amount={props.expense[i].amount} />);
    }
    return (
        <Card className='expenses'>{array}</Card>
    )
}

export default Expenses;