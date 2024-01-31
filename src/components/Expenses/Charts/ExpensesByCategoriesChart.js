import React, { useContext } from "react"
import { Line } from "react-chartjs-2"
import { ExpenseReducerContext } from "../ExpenseContext/ExpenseContextReducer"
import "./Chart.css"

export default function ExpensesByCategoriesChart() {
    const { expensesList } = useContext(ExpenseReducerContext)

    const chartData = {
        labels: ["Jan", "Feb", "Mar"],
        datasets: [
            {
                label: "Sales for 2020",
                data: [3, 5, 2],
            },
        ],
    }

    return (
        <div className="chart">
            <Line data={chartData} />
        </div>
    )
}
