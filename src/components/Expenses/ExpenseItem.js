import React from 'react';
import './ExpenseItem.css';
import { Date } from './Date';
import { Card } from '../UI/Card';


export const ExpenseItem = (props) => {
    const { date, description, cost } = props

    return (
        <li>
            <Card className='expense-item'>
                <Date date={date} />
                <div className='expense-item__description'>
                    <h2>{description}</h2>
                    <div className='expense-item__price'>{cost}</div>
                </div>
            </Card>
        </li>
    )
}

