import React from 'react'
import { ExpenseForm } from './ExpenseForm'
import './InputExpense.css'

export const InputExpense = (props) => {

    const expenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.floor(Math.random() * Date.now()).toString()
        }
        props.onAddExpense(expenseData)
    }

    return (
        <div className='input-expense'>
            <ExpenseForm onExpenseData={expenseDataHandler} />
        </div>
    )
}
