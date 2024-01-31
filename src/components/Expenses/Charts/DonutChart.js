import React, { useEffect, useRef } from "react"
import { Doughnut } from "react-chartjs-2"

const DonutChart = ({ categoryData }) => {
    const chartRef = useRef(null)

    useEffect(() => {
        if (chartRef.current) {
            chartRef.current.destroy()
        }
    }, [categoryData])

    const data = {
        labels: categoryData.map((category) => category.name),
        datasets: [
            {
                data: categoryData.map((category) =>
                    calculateTotalExpenses(category)
                ),
                backgroundColor: generateRandomColors(categoryData.length),
            },
        ],
    }

    return <Doughnut ref={chartRef} data={data} />
}

const calculateTotalExpenses = (category) => {
    let total = 0

    category.expenses.forEach((expense) => {
        total += parseFloat(expense.expenseAmmount)
    })

    return total
}

const generateRandomColors = (count) => {
    const colors = []
    for (let i = 0; i < count; i++) {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(
            16
        )}`
        colors.push(randomColor)
    }
    return colors
}

export default DonutChart
