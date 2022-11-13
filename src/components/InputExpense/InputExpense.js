import React, { useState } from 'react'
import { ExpenseForm } from './ExpenseForm'
import './InputExpense.css'

export const InputExpense = (props) => {
    const [showForm, setShowForm] = useState(false)

    const handleExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.floor(Math.random() * Date.now()).toString()
        }
        props.onAddExpense(expenseData)
        setShowForm(false);
    };
    const handleForm = () => {
        setShowForm(true)
    };
    const cancelForm = () => {
        setShowForm(false)
    }
    return (
        <div className='input-expense'>
            {!showForm && <button onClick={handleForm}>Add An Expense</button>}
            {showForm && <ExpenseForm onExpenseData={handleExpenseData} onCancelForm={cancelForm} />}

        </div>
    )
}
