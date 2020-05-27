import React, { useState } from 'react';
import { AddExpenseForm } from './AddExpenseForm';
import { Expenses } from './Expenses';

const initialExpenses: Array<Expense> = [
  {title: "Milk", date:new Date(), category: "Grocery", value:"90.00"},
  {title: "Electric Bill", date:new Date(), category: "Monthly Bills", value:"1400.00"},
]

const App: React.FC = () => {
  const [expenses, setExpenses] = useState(initialExpenses);
  const addExpense: AddExpense = (newExpense, newCategory, newValue) => {
    setExpenses([...expenses, {title: newExpense, date: new Date(), category: newCategory, value: newValue}]);
  }
  return (
      <React.Fragment>
        <Expenses expenses={expenses} />
        <AddExpenseForm addExpense={addExpense}/>
      </React.Fragment>
    );
}

export default App;
