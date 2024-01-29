import React, { useReducer, useContext } from 'react'
import "../../assets/text.css"
import Expense from './Expense'
import "./Expenses.css"
import { ExpenseContext } from "./ExpenseContext/ExpenseContext"

const expenseReducer = (state, action) => {
    switch (action.type) {
        case "ADD_AN_EXPENSE":
            return [
                ...state,
                {
                    id: Math.round(Math.random() * 10000000),
                    date: action.payload.date,
                    expenseAmmount: action.payload.expenseAmmount,
                    description: action.payload.description,
                }
            ]
        default:
            return state
    }
}

export default function Category({ name }) {
    const [expensesList, dispatchExpensesList] = useReducer(expenseReducer, [])

    const { date, expenseAmmount, description, handleDateChange, handleAmmountChange, handleDescriptionChange } = useContext(ExpenseContext)

    return (
        <div className="oneCategory">
            <h2 className='second-header'>{name} expenses</h2>
            {
                date && expenseAmmount && description &&
                expensesList.map(item => <Expense key={item.id} date={item.date} expenseAmmount={item.expenseAmmount} description={item.description} />)
            }

            <form onSubmit={evt => evt.preventDefault()}>
                <input type="date" className='dateInput input-light' onChange={(evt) => handleDateChange(evt)} /><br />

                <input type="number" placeholder='Expense ammount' className='expenseInput input-light' onChange={(evt) => handleAmmountChange(evt)} /><br />

                <textarea className='descriptionInput input-light' placeholder='Small description' onChange={(evt) => handleDescriptionChange(evt)} /><br />

                <button className="addAnExpense" onClick={(evt) => {
                    evt.preventDefault()
                    dispatchExpensesList({ type: "ADD_AN_EXPENSE", payload: { date, expenseAmmount, description } })
                }}>Add an expense</button>
            </form>

            <h2 className='second-header'>{name} total: $</h2>
        </div>
    )
}
