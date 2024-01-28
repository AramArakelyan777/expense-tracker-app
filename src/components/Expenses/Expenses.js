import React from 'react'
import "./Expenses.css"
import "../../assets/text.css"
import Button from "../Button/Button"

export default function Expenses() {
    return (
        <>
            <h1 className="main-header">Financial insights</h1>
            <input className="search input-light" placeholder='Search categories' />
            <div className='yourSalary'>
                <h2 className='second-header'>Enter Your Monthly Salary</h2>
                <input type='number' className="salary input-light" placeholder='Your Salary' />
            </div>
            <form className='addACategory'>
                <input type="text" className="category input-light" placeholder='Add a category' /><br />
                <Button className="button ok">Add</Button>
            </form>
            <div className="donutChart">
                <h1 className='main-header'>Expenses by categories</h1>
            </div>
            <div className="totalChart">
                <h1 className='main-header'>Difference between expenses and income</h1>
            </div>
            <h1 className="main-header">Total expenses: $</h1>
        </>
    )
}
