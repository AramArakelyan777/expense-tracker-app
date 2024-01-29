import React, { useReducer, useContext } from 'react'
import "../../assets/text.css"
import Expense from './Expense'
import "./Expenses.css"
import { ExpenseContext } from "./ExpenseContext/ExpenseContext"

const expenseReducer = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default function Category({ name }) {
    const [expensesList, dispatchExpensesList] = useReducer(expenseReducer, [])

    const { handleDateChange, handleAmmountChange, handleDescriptionChange } = useContext(ExpenseContext)

    return (
        <div className="oneCategory">
            <h2 className='second-header'>{name} expenses</h2>
            {expensesList.map(item => <Expense key={item.id} />)}

            <form>
                <input type="date" className='date input-light' onChange={(evt) => handleDateChange(evt)} /><br />

                <input type="number" placeholder='Expense ammount' className='expense input-light' onChange={(evt) => handleAmmountChange(evt)} /><br />

                <textarea className='description input-light' placeholder='Small description' onChange={(evt) => handleDescriptionChange(evt)} /><br />

                <button className="addAnExpense" onClick={(evt) => {
                    evt.preventDefault()
                    dispatchExpensesList({ type: "ADD_AN_EXPENSE", payload: {} })
                }}>Add an expense</button>
            </form>

            <h2 className='second-header'>{name} total: $</h2>
        </div>
    )
}
