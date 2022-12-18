import React, { useState } from 'react';
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

function Expenses(props) {
    const [expenses, setFilteredExpenses] = useState(props.expense);
    const [yearFilterBy, setYearFilterby] = useState('2022');
    const changeYear = (newYear) => {
        setYearFilterby(newYear);
        console.log(newYear);
    }
    const filteredExpense = props.expense.filter(expense => { return expense.date.getFullYear().toString() === yearFilterBy });
    return (
        <>
            <Card className='expenses'><ExpensesFilter onToggle={changeYear} />
                <ExpensesList items={filteredExpense} />
            </Card>
        </>
    )
}

export default Expenses;