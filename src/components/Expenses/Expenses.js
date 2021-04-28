import React from 'react';
import ExpenseItem from './ExpenseItem';
function Expenses({ expenses }) {
    const style = {
        backgroundColor: '#2a2a2a',
        padding: '1em',
        borderRadius: '45px',
        border: '2px solid #2a2a2a'
    }
    return (
        <div style={style} >
            {
                expenses.map(({ title, id, date, amount }) => <ExpenseItem title={title} key={id} date={date} amount={amount}></ExpenseItem>)
            }
        </div>
    );
}

export default Expenses;