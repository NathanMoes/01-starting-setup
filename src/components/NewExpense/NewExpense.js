import React, { useState } from "react";
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) => {
    const [isEdit, setIsEdit] = useState(false);
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
    };
    const startEditHandler = () => {
        setIsEdit(true)
    }
    const exitEdit = () => {
        setIsEdit((current) => { return !current })
    }
    return (
        <div className="new-expense">
            {!isEdit && <button onClick={startEditHandler}>Add New Expense</button>}
            {isEdit && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancle={exitEdit} />}
        </div>
    );
}

export default NewExpense;