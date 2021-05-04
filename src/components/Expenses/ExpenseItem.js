import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import React, { useState } from 'react';
import Card from '../UI/Card';

function ExpenseItem({ title, amount, date }) {
    const [titleName, setTitle] = useState(title);
    return (
        <div>

            <Card className="expense-item">
                <ExpenseDate date={date}></ExpenseDate>
                <div className="expense-item__description">
                    <h2>{titleName}</h2>
                    <div className="expense-item__price">${amount}</div>
                </div>
            </Card>
        </div>
    )
}

export default ExpenseItem;