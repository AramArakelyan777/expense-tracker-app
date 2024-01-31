import React, { useContext, useState } from "react"
import "./Expenses.css"
import "../../assets/text.css"
import Category from "./Category"
import { CategoryContext } from "./ExpenseContext/CategoryContext"
import { ExpenseReducerContext } from "./ExpenseContext/ExpenseContextReducer"
import Chart1 from "./Charts/Chart1"

export default function Expenses() {
    const [category, setCategory] = useState("")

    const { categoriesState, addACategory } = useContext(CategoryContext)
    const { expensesList } = useContext(ExpenseReducerContext)

    const calculateTotalCategoryExpenses = () => {
        let totalCategoryExpenses = 0

        categoriesState.forEach((item) => {
            const categoryName = item.name
            expensesList[categoryName]?.forEach((expense) => {
                totalCategoryExpenses += parseFloat(expense.expenseAmmount)
            })
        })

        return totalCategoryExpenses.toFixed(2)
    }

    const totalCategoryExpenses = calculateTotalCategoryExpenses()

    return (
        <div className="expensesPageDiv">
            <h1 className="main-header">Financial insights</h1>
            <input
                className="search input-light"
                placeholder="Search categories"
                name="category-search"
            />

            <div className="categoryDiv">
                {categoriesState.map((item) => (
                    <Category key={item.id} id={item.id} name={item.name} />
                ))}
            </div>

            <form className="addACategory">
                <input
                    type="text"
                    className="category input-light"
                    placeholder="Add a category"
                    value={category}
                    onChange={(evt) => setCategory(evt.target.value)}
                    name="category"
                />
                <br />
                <button
                    className="add"
                    onClick={(evt) => {
                        evt.preventDefault()
                        if (category) addACategory(category)
                        setCategory("")
                    }}
                >
                    Add
                </button>
            </form>

            <div>
                <Chart1
                    categoryData={categoriesState}
                    expensesList={expensesList}
                />
            </div>

            <h1 className="main-header">
                Total expenses: ${totalCategoryExpenses}
            </h1>
        </div>
    )
}
