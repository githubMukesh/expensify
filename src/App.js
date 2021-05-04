import './App.css';
import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/newExpenses/NewExpense'

function App() {
  const deafultExpenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(deafultExpenses);
  const [filter, setFilterValue] = useState('');

  const addExpenseHandler = (expenseData) => {

    setExpenses((prevState) => [...prevState, expenseData]);
  }

  const onFilterChange = (value) => {
    setFilterValue((prevState) => {
      const filterExpense = expenses.filter((expense) => expense.date.getFullYear().toString() === value);
      setExpenses((prevState) => filterExpense);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <NewExpense addExpenseHandler={addExpenseHandler}></NewExpense>
        <Expenses expenses={expenses} onFilterChange={onFilterChange} selectedValue={filter}></Expenses>
      </header>
    </div>
  );
}

export default App;
