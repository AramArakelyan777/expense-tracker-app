import React, { useContext, useRef } from 'react'
import "../../assets/text.css"
import Expense from './Expense'
import "./Expenses.css"
import { ExpenseContext, ExpenseContextProvider } from "./ExpenseContext/ExpenseContext"

export default function Category({ name }) {
    const { date, expenseAmmount, description, handleDateChange, handleAmmountChange, handleDescriptionChange } = useContext(ExpenseContext)
    const { expensesList, addExpense } = useContext(ExpenseContextProvider)

    const dateRef = useRef(null)
    const expenseAmmountRef = useRef(null)
    const descriptionRef = useRef(null)

    return (
        <div className="oneCategory">
            <h2 className='second-header'>{name} expenses</h2>
            {expensesList.map(item => <Expense key={item.id} date={item.date} expenseAmmount={item.expenseAmmount} description={item.description} />)}

            <form className="expenseForm">
                <input
                    type="date"
                    required ref={dateRef}
                    className='dateInput input-light'
                    onChange={(evt) => handleDateChange(evt.target.value)}
                />
                <br />

                <input
                    type="number"
                    required ref={expenseAmmountRef}
                    placeholder='Expense ammount'
                    className='expenseInput input-light'
                    onChange={(evt) => handleAmmountChange(evt.target.value)}
                />
                <br />

                <textarea
                    required
                    className='descriptionInput input-light'
                    ref={descriptionRef}
                    placeholder='Small description'
                    onChange={(evt) => handleDescriptionChange(evt.target.value)}
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
                            handleDateChange(null)
                            handleAmmountChange(0)
                            handleDescriptionChange("")
                        } else console.error("expense form values can't be empty")
                    }}
                >Add an expense
                </button>
            </form>

            <h2 className='second-header'>{name} total: $0</h2>
        </div>
    )
}
