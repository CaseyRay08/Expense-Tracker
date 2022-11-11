

import './Expenses.css'
import { Card } from '../UI/Card'
import React, { useState } from 'react'
import { ExpenseFilter } from './ExpenseFilter'
import { ExpensesList } from "./ExpensesList";


export const Expenses = (props) => {
    const [yearFilter, setYearFilter] = useState('2022')

    const handleYear = year => {
        setYearFilter(year)
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear() === +yearFilter;
    });




    return (

        <Card className="expenses">
            <ExpenseFilter onYearData={handleYear} value={yearFilter} />
            <ExpensesList items={filteredExpenses} />

        </Card>

    );
};





