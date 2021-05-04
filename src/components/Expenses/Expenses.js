import React from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';

function Expenses({ expenses, onFilterChange }) {
    const style = {
        backgroundColor: '#2a2a2a',
        padding: '1em',
        borderRadius: '45px',
        border: '2px solid #2a2a2a'
    }
    const setFilter = (filter) => {
        onFilterChange(filter);
    }

    return (
        <div>
            <div style={style} >
                <ExpenseFilter setFilter={setFilter}></ExpenseFilter>
                {
                    expenses.map(({ title, id, date, amount }) => <ExpenseItem title={title} key={id} date={date} amount={amount}></ExpenseItem>)
                }
            </div>
        </div>
    );
}

export default Expenses;