import React, { useState } from 'react'
import './ExpenseForm.css'


export const ExpenseForm = (props) => {
    const [desc, setDesc] = useState('')
    const [date, setDate] = useState('')
    const [cost, setCost] = useState('')
    const [showForm, setShowForm] = useState(false)


    const handleDesc = (e) => {
        setDesc(e.target.value);
    }
    const handleDate = (e) => {
        setDate(e.target.value)
    }
    const handleCost = (e) => {
        setCost(e.target.value)
    }

    const hideForm = () => {
        setShowForm(false);
        setDesc('');
        setDate('');
        setCost('');
    }


    const handleForm = e => {
        e.preventDefault()
        const expenseData = {
            description: desc,
            date: new Date(date),
            cost: cost
        }

        props.onExpenseData(expenseData)

        hideForm();



    };
    return (
        <div>
            {
                showForm ? (
                    <form onSubmit={handleForm} >
                        <div className='input-expense__controls'>

                            <div className='input-expense__controls'>
                                <label>Description</label>
                                <input type='text' onChange={handleDesc} value={desc} />
                            </div>

                            <div className='input-expense__controls'>
                                <label>Date</label>
                                <input type='date' min='2015-01-01' max='2025-12-31' onChange={handleDate} value={date} />
                            </div>

                            <div className='input-expense__controls'>
                                <label>Cost</label>
                                <input type='number' min='0.01' step='0.01' onChange={handleCost} value={cost} />
                            </div>

                        </div>

                        <div className='new-expense__actions'>
                            <button onClick={() => hideForm()}>Cancel</button>
                            <button type='submit'>Add Expense</button>
                        </div>
                    </form >
                ) : <button onClick={() => setShowForm(true)}>Add Expense</button>
            }
        </div>
    )
}
