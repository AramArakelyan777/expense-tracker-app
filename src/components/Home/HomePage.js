import React from "react"
import homePageBg from "../../assets/img/homePageImage.jpg"
import "./HomePage.css"
import "../../assets/text.css"
import { FaMoneyBillWave } from "react-icons/fa"
import { GrConfigure } from "react-icons/gr"
import { FaListAlt, FaSearchDollar, FaChartArea } from "react-icons/fa"
import { IconContext } from "react-icons"

export default function HomePage() {
    return (
        <div className="homepage">
            <div className="homePageContent">
                <h1 className="main-header">Track today, prosper tomorrow.</h1>
                <p>Experience financial clarity with every transaction.</p>
                <div className="homePageContentInfo">
                    <h2 className="second-header">What can you do here?</h2>
                    <ul>
                        <IconContext.Provider value={{ size: 25 }}>
                            <li>
                                <FaMoneyBillWave
                                    style={{ marginRight: "10px" }}
                                />
                                Track your expenses: easily categorize your
                                expenses.
                            </li>
                            <li>
                                <IconContext.Provider value={{ size: 25 }}>
                                    <GrConfigure
                                        style={{ marginRight: "10px" }}
                                    />
                                </IconContext.Provider>
                                Add expenses and income: seamlessly add expenses
                                or delete the existing ones.
                            </li>
                            <li>
                                <IconContext.Provider value={{ size: 25 }}>
                                    <FaListAlt
                                        style={{ marginRight: "10px" }}
                                    />
                                </IconContext.Provider>
                                Expense list: view a comprehensive list of your
                                expenses, including date, description, amount,
                                and category.
                            </li>
                            <li>
                                <IconContext.Provider value={{ size: 25 }}>
                                    <FaSearchDollar
                                        style={{ marginRight: "10px" }}
                                    />
                                </IconContext.Provider>
                                Filter and search: filter and search expenses
                                based on date range.
                            </li>
                            <li>
                                <IconContext.Provider value={{ size: 25 }}>
                                    <FaChartArea
                                        style={{ marginRight: "10px" }}
                                    />
                                </IconContext.Provider>
                                Expense summary: get a quick overview of total
                                expenses, also with interactive charts.
                            </li>
                        </IconContext.Provider>
                    </ul>
                </div>
            </div>
            <img
                alt="homePageImage"
                src={homePageBg}
                className="homePageImage"
            />
        </div>
    )
}
