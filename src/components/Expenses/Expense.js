import React, { useContext } from 'react'
import "../../assets/text.css"
import { IoCloseCircle } from "react-icons/io5"
import { ExpenseReducerContext } from './ExpenseContext/ExpenseContextReducer'

export default function Expense({ id, date, expenseAmmount, description }) {
    const { deleteExpense } = useContext(ExpenseReducerContext)

    return (
        <div className="oneExpense">
            <div className="dateAndClose">
                <span className="date input-light">{date}</span>
                <IoCloseCircle
                    color="red"
                    size="23px"
                    cursor="pointer"
                    onClick={() => deleteExpense(id)}
                />
            </div>
            <span className="expenseAmmount">${expenseAmmount} expenses</span><br />
            <span className="description">{description}</span>
        </div>
    )
}
