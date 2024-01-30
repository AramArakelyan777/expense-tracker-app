import { createContext, useReducer } from "react"

export const ExpenseReducerContext = createContext(null)

const expenseReducer = (state, action) => {
    switch (action.type) {
        case "ADD_AN_EXPENSE":
            return [
                ...state,
                {
                    id: Math.round(Math.random() * 10000000),
                    date: action.payload.date,
                    expenseAmmount: action.payload.expenseAmmount,
                    description: action.payload.description,
                }
            ]
        case "DELETE_AN_EXPENSE":
            return state.filter(expense => expense.id !== action.payload.id);
        default:
            return state
    }
}

export const ExpenseReducerContextProvider = ({ children }) => {
    const [expensesList, dispatchExpensesList] = useReducer(expenseReducer, [])

    const addExpense = (date, expenseAmmount, description) => dispatchExpensesList({ type: "ADD_AN_EXPENSE", payload: { date, expenseAmmount, description } })
    const deleteExpense = (id) => dispatchExpensesList({ type: "DELETE_AN_EXPENSE", payload: { id } })

    return <ExpenseReducerContext.Provider value={{ expensesList, addExpense, deleteExpense }} >{children}</ExpenseReducerContext.Provider>
}
