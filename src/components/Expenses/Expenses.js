import React, { useState } from 'react';
import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
    let array = []
    for (let i = 0; i < props.num; i += 1) {
        array.push(<ExpenseItem date={props.expense[i].date} title={props.expense[i].title} amount={props.expense[i].amount} />);
    }
    const [expenses, setFilteredExpenses] = useState(array);
    const [yearFilterBy, setYearFilterby] = useState('');
    const changeYear = (newYear) => {
        setYearFilterby(newYear);
        console.log(newYear);
    }
    return (
        <>
            <Card className='expenses'><ExpensesFilter onToggle={changeYear} />{expenses}</Card>
        </>
    )
}

export default Expenses;