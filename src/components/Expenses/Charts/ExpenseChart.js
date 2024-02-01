import React, { useContext, useEffect, useState } from "react"
import { Line } from "react-chartjs-2"
import { ExpenseReducerContext } from "../ExpenseContext/ExpenseContextReducer"
import "./Chart.css"

const getRandomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`

const ExpenseChart = ({ category }) => {
    const { expensesList } = useContext(ExpenseReducerContext)
    const [backgroundColor, setBackgroundColor] = useState(getRandomColor())

    useEffect(() => {
        setBackgroundColor(getRandomColor())
    }, [category])

    const generateChartData = () => {
        const data = {
            labels:
                expensesList[category]?.map((expense) => expense.date) || [],
            datasets: [
                {
                    label: "Expenses Over Time",
                    fill: true,
                    lineTension: 0.1,
                    backgroundColor: backgroundColor,
                    data:
                        expensesList[category]?.map((expense) =>
                            parseFloat(expense.expenseAmmount)
                        ) || [],
                },
            ],
        }
        return data
    }

    return (
        <div className="expenseChart">
            <div key={category}>
                <h3>{category} Expenses Over Time</h3>
                <Line data={generateChartData()} />
            </div>
        </div>
    )
}

export default ExpenseChart
