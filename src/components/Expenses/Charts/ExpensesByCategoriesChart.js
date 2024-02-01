import React, { useContext, useEffect, useState } from "react"
import { Line } from "react-chartjs-2"
import { ExpenseReducerContext } from "../ExpenseContext/ExpenseContextReducer"
import { CategoryContext } from "../ExpenseContext/CategoryContext"
import "./Chart.css"
import { getRandomColor } from "./ExpenseChart"

export default function ExpensesByCategoriesChart() {
    const { expensesList } = useContext(ExpenseReducerContext)
    const { categoriesState } = useContext(CategoryContext)

    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [],
    })

    useEffect(() => {
        updateChartData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [expensesList, categoriesState])

    const updateChartData = () => {
        const categories = categoriesState.map((category) => category.name)
        const datasets = []

        const categoryTotalExpenses = categories.map((category) => {
            const categoryExpenses = expensesList[category] || []
            return categoryExpenses.reduce(
                (sum, expense) => sum + expense.expenseAmmount,
                0
            )
        })

        datasets.push({
            label: "Expenses per category",
            data: categoryTotalExpenses,
            borderColor: getRandomColor(),
            fill: false,
        })

        setChartData({
            labels: categories,
            datasets,
        })
    }

    return (
        <div className="chart">
            <Line data={chartData} />
        </div>
    )
}
