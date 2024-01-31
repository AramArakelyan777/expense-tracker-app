import React, { useContext, useRef, useState } from "react"
import "../../assets/text.css"
import Expense from "./Expense"
import "./Expenses.css"
import { ExpenseReducerContext } from "./ExpenseContext/ExpenseContextReducer"
import { IoCloseCircle } from "react-icons/io5"
import { CategoryContext } from "./ExpenseContext/CategoryContext"

export default function Category({ id, name }) {
    const { expensesList, addExpense } = useContext(ExpenseReducerContext)

    const dateRef = useRef(null)
    const expenseAmmountRef = useRef(null)
    const descriptionRef = useRef(null)

    const [localDate, setLocalDate] = useState(null)
    const [localExpenseAmmount, setLocalExpenseAmmount] = useState(null)
    const [localDescription, setLocalDescription] = useState("")

    const { deleteACategory } = useContext(CategoryContext)
    const { deleteExpense } = useContext(ExpenseReducerContext)

    const clearInputs = () => {
        setLocalDate(null)
        setLocalExpenseAmmount(0)
        setLocalDescription("")

        dateRef.current.value = null
        expenseAmmountRef.current.value = null
        descriptionRef.current.value = ""
    }

    const calculateTotalExpenses = () => {
        let total = 0

        expensesList[name]?.forEach((expense) => {
            total += parseFloat(expense.expenseAmmount)
        })

        return total
    }

    const totalExpenses = calculateTotalExpenses()

    return (
        <div className="oneCategory">
            <h2 className="second-header">{name} expenses</h2>
            <IoCloseCircle
                className="categoryClose"
                color="red"
                cursor="pointer"
                size="28px"
                onClick={() => {
                    expensesList[name]?.forEach((expense) => {
                        deleteExpense(name, expense.id)
                    })
                    deleteACategory(id)
                }}
            />
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
                    onChange={(evt) => setLocalDate(evt.target.value)}
                    name="date"
                />
                <br />

                <input
                    type="number"
                    required
                    ref={expenseAmmountRef}
                    placeholder="Expense ammount"
                    className="expenseInput input-light"
                    onChange={(evt) =>
                        setLocalExpenseAmmount(parseFloat(evt.target.value))
                    }
                    name="expense"
                />
                <br />

                <textarea
                    required
                    className="descriptionInput input-light"
                    ref={descriptionRef}
                    placeholder="Small description"
                    onChange={(evt) => setLocalDescription(evt.target.value)}
                    name="description"
                />
                <br />

                <button
                    className="addAnExpense"
                    onClick={(evt) => {
                        evt.preventDefault()
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

            <h2 className="second-header categoryTotal">
                {name} total: ${totalExpenses.toFixed(2)}
            </h2>
        </div>
    )
}
