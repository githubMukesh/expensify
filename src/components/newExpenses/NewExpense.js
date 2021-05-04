import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';


const NewExpense = ({ addExpenseHandler }) => {
    const saveExpenseData = (enteredExpenseData) => {
        const expenseData = { ...enteredExpenseData, id: Math.floor(Math.random() * 100) };
        addExpenseHandler(expenseData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseData}></ExpenseForm>
        </div>
    )
}

export default NewExpense;