import React from 'react'
import "../../assets/text.css"

export default function Expense({ date, expenseAmmount, description }) {
    return (
        <div className="oneExpense">
            <div className="dateAndClose">
                <span className="date input-light">{date}</span>
            </div>
            <span className="expenseAmmount">${expenseAmmount} expenses</span><br />
            <span className="description">{description}</span>
        </div>
    )
}
