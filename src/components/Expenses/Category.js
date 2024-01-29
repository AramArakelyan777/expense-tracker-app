import React, { useReducer, useState } from 'react'
import "../../assets/text.css"
import Expense from './Expense'
import "./Expenses.css"

const expenseReducer = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default function Category({ name }) {
    const [expensesList, dispatchExpensesList] = useReducer(expenseReducer, [])

    const [date, setDate] = useState(null)
    const [expenseAmmount, setExpenseAmmount] = useState(0)
    const [description, setDescription] = useState("")

    return (
        <div className="oneCategory">
            <h2 className='second-header'>{name} expenses</h2>
            {expensesList.map(item => <Expense key={item.id} />)}

            <form>
                <input type="date" className='date input-light' onChange={(evt) => {
                    setDate(evt.target.value)
                    console.log(evt.target.value)
                }} /><br />

                <input type="number" placeholder='Expense ammount' className='expense input-light' onChange={(evt) => {
                    setExpenseAmmount(evt.target.value)
                    console.log(evt.target.value)
                }} /><br />

                <textarea className='description input-light' placeholder='Small description' onChange={(evt) => {
                    setDescription(evt.target.value)
                    console.log(evt.target.value)
                }} /><br />

                <button className="addAnExpense" onClick={(evt) => {
                    evt.preventDefault()
                    dispatchExpensesList({ type: "ADD_AN_EXPENSE", payload: { date, expenseAmmount, description } })
                }}>Add an expense</button>
            </form>

            <h2 className='second-header'>{name} total: $</h2>
        </div>
    )
}
