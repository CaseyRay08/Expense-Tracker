
import React from 'react'
import './ExpenseFilter.css'

export const ExpenseFilter = (props) => {


    const changeHandler = e => {
        props.onYearData(e.target.value)
    }


    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Select a year</label>
                <select value={props.value} onChange={changeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    )
}


