import React, { useContext, useRef, useState } from "react"
import "../../assets/text.css"
import Expense from "./Expense"
import "./Expenses.css"
import { ExpenseContext } from "./ExpenseContext/ExpenseContext"
import { ExpenseReducerContext } from "./ExpenseContext/ExpenseContextReducer"

export default function Category({ name }) {
    const { handleDateChange, handleAmmountChange, handleDescriptionChange } =
        useContext(ExpenseContext)
    const { expensesList, addExpense } = useContext(ExpenseReducerContext)

    const dateRef = useRef(null)
    const expenseAmmountRef = useRef(null)
    const descriptionRef = useRef(null)

    // Local state for each category
    const [localDate, setLocalDate] = useState(null)
    const [localExpenseAmmount, setLocalExpenseAmmount] = useState(null)
    const [localDescription, setLocalDescription] = useState("")

    const clearInputs = () => {
        // Update state for the specific category
        setLocalDate(null)
        setLocalExpenseAmmount(0)
        setLocalDescription("")

        // Clear inputs using refs
        dateRef.current.value = null
        expenseAmmountRef.current.value = null
        descriptionRef.current.value = ""
    }

    return (
        <div className="oneCategory">
            <h2 className="second-header">{name} expenses</h2>
            {expensesList[name]?.map((item) => (
                <Expense
                    key={item.id}
                    id={item.id}
                    date={item.date}
                    expenseAmmount={item.expenseAmmount}
                    description={item.description}
                    category={name}
                />
            ))}

            <form className="expenseForm">
                <input
                    type="date"
                    required
                    ref={dateRef}
                    className="dateInput input-light"
                    onChange={(evt) => {
                        handleDateChange(evt.target.value)
                        setLocalDate(evt.target.value)
                    }}
                    name="date"
                />
                <br />

                <input
                    type="number"
                    required
                    ref={expenseAmmountRef}
                    placeholder="Expense ammount"
                    className="expenseInput input-light"
                    onChange={(evt) => {
                        handleAmmountChange(evt.target.value)
                        setLocalExpenseAmmount(evt.target.value)
                    }}
                    name="expense"
                />
                <br />

                <textarea
                    required
                    className="descriptionInput input-light"
                    ref={descriptionRef}
                    placeholder="Small description"
                    onChange={(evt) => {
                        handleDescriptionChange(evt.target.value)
                        setLocalDescription(evt.target.value)
                    }}
                    name="description"
                />
                <br />

                <button
                    className="addAnExpense"
                    onClick={(evt) => {
                        evt.preventDefault()

                        // Check for emptiness using local state
                        if (
                            localDate &&
                            localExpenseAmmount &&
                            localDescription
                        ) {
                            addExpense(
                                name,
                                localDate,
                                localExpenseAmmount,
                                localDescription
                            )
                            clearInputs()
                        } else {
                            console.error("expense form values can't be empty")
                        }
                    }}
                >
                    Add an expense
                </button>
            </form>

            <h2 className="second-header">{name} total: $0</h2>
        </div>
    )
}
