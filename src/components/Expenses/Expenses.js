import React, { useContext, useState } from "react"
import "./Expenses.css"
import "../../assets/text.css"
import Category from "./Category"
import { CategoryContext } from "./ExpenseContext/CategoryContext"

export default function Expenses() {
    const [salary, setSalary] = useState()
    const [category, setCategory] = useState("")

    const { categoriesState, addACategory } = useContext(CategoryContext)

    return (
        <div className="expensesPageDiv">
            <h1 className="main-header">Financial insights</h1>
            <input
                className="search input-light"
                placeholder="Search categories"
                name="category-search"
            />

            <div className="yourSalary">
                <h2 className="second-header">Enter Your Monthly Salary</h2>
                <input
                    type="number"
                    className="salary input-light"
                    placeholder="Your Salary"
                    value={salary}
                    onChange={(evt) => setSalary(evt.target.value)}
                    name="salary"
                />
            </div>

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

            <div className="donutChart">
                <h1 className="main-header">Expenses by categories</h1>
            </div>

            <div className="totalChart">
                <h1 className="main-header">
                    Difference between expenses and income
                </h1>
            </div>

            <h1 className="main-header">Total expenses: $</h1>
        </div>
    )
}
