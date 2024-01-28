import React from 'react'
import homePageBg from "../../assets/img/homePageImage.jpg"
import "./HomePage.css"

export default function HomePage() {
    return (
        <div className="homepage">
            <div className="homePageContent">
                <h1>Track today, prosper tomorrow.</h1>
                <p>Experience financial clarity with every transaction.</p>
                <div className="homePageContentInfo">
                    <h2>What can you do here?</h2>
                    <ul>
                        <li>Track your expenses: easily categorize your expenses.</li>
                        <li>Add expenses and income: seamlessly add expenses or delete the existing ones.</li>
                        <li>Expense list: view a comprehensive list of your expenses, including date, description, amount, and category.</li>
                        <li>Filter and search: filter and search expenses based on date range.</li>
                        <li>Expense summary: get a quick overview of total expenses and income, also with interactive charts. </li>
                    </ul>
                </div>
            </div>
            <img alt="homePageImage" src={homePageBg} className="homePageImage" />
        </div>
    )
}
