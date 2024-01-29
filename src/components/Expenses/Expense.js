import React from 'react'
import "../../assets/text.css"
import { IoCloseCircle } from "react-icons/io5"

export default function Expense({ date, expenseAmmount, description }) {
    return (
        <div className="oneExpense">
            <div className="dateAndClose">
                <span className="date input-light">{date}</span>
                <IoCloseCircle
                    color="red"
                    size="23px"
                    cursor="pointer"
                />
            </div>
            <span className="expenseAmmount">${expenseAmmount} expenses</span><br />
            <span className="description">{description}</span>
        </div>
    )
}
