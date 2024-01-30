import React, { useContext, useRef } from 'react'
import "../../assets/text.css"
import Expense from './Expense'
import "./Expenses.css"
import { ExpenseContext } from "./ExpenseContext/ExpenseContext"
import { ExpenseReducerContext } from './ExpenseContext/ExpenseContextReducer'

export default function Category({ name }) {
    const { date, expenseAmmount, description, handleDateChange, handleAmmountChange, handleDescriptionChange } = useContext(ExpenseContext)
    const { expensesList, addExpense } = useContext(ExpenseReducerContext)

    const dateRef = useRef(null)
    const expenseAmmountRef = useRef(null)
    const descriptionRef = useRef(null)

    const clearInputs = () => {
        handleDateChange(null)
        handleAmmountChange(0)
        handleDescriptionChange("")
    }

    return (
        <div className="oneCategory">
            <h2 className='second-header'>{name} expenses</h2>
            {expensesList.map(item => <Expense key={item.id} id={item.id} date={item.date} expenseAmmount={item.expenseAmmount} description={item.description} />)}

            <form className="expenseForm">
                <input
                    type="date"
                    required ref={dateRef}
                    className='dateInput input-light'
                    onChange={(evt) => handleDateChange(evt.target.value)}
                    name="date"
                />
                <br />

                <input
                    type="number"
                    required ref={expenseAmmountRef}
                    placeholder='Expense ammount'
                    className='expenseInput input-light'
                    onChange={(evt) => handleAmmountChange(evt.target.value)}
                    name="expense"
                />
                <br />

                <textarea
                    required
                    className='descriptionInput input-light'
                    ref={descriptionRef}
                    placeholder='Small description'
                    onChange={(evt) => handleDescriptionChange(evt.target.value)}
                    name="description"
                />
                <br />

                <button
                    className="addAnExpense"
                    onClick={(evt) => {
                        evt.preventDefault()

                        if (date && expenseAmmount && description) {
                            addExpense(date, expenseAmmount, description)
                            dateRef.current.value = null
                            expenseAmmountRef.current.value = null
                            descriptionRef.current.value = ""
                            clearInputs()
                        } else console.error("expense form values can't be empty")
                    }}
                >Add an expense
                </button>
            </form>

            <h2 className='second-header'>{name} total: $0</h2>
        </div>
    )
}
