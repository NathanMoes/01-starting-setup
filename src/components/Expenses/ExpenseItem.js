import React, { useState } from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
    // const expenseDate = props.date;
    let expenseAmount = props.amount;
    const clickHandler = () => {
        setTitle("Updated!");
        console.log(title)
    }
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date}></ExpenseDate>
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">${expenseAmount}</div>
                </div>
                <button onClick={clickHandler}>Change Title</button>
            </Card>
        </li>
    );
}
export default ExpenseItem;