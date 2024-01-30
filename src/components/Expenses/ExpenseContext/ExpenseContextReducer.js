import { createContext, useReducer } from "react"

export const ExpenseReducerContext = createContext(null)

const expenseReducer = (state, action) => {
    const { category, payload } = action

    switch (action.type) {
        case "ADD_AN_EXPENSE":
            return {
                ...state,
                [category]: [
                    ...(state[category] || []),
                    {
                        id: Math.round(Math.random() * 10000000),
                        date: payload.date,
                        expenseAmmount: payload.expenseAmmount,
                        description: payload.description,
                    },
                ],
            }
        case "DELETE_AN_EXPENSE":
            return {
                ...state,
                [category]: state[category]
                    ? state[category].filter(
                          (expense) => expense.id !== payload.id
                      )
                    : [],
            }
        default:
            return state
    }
}

export const ExpenseReducerContextProvider = ({ children }) => {
    const [expensesList, dispatchExpensesList] = useReducer(expenseReducer, {})

    const addExpense = (category, date, expenseAmmount, description) =>
        dispatchExpensesList({
            type: "ADD_AN_EXPENSE",
            category,
            payload: { date, expenseAmmount, description },
        })

    const deleteExpense = (category, id) =>
        dispatchExpensesList({
            type: "DELETE_AN_EXPENSE",
            category,
            payload: { id },
        })

    return (
        <ExpenseReducerContext.Provider
            value={{ expensesList, addExpense, deleteExpense }}
        >
            {children}
        </ExpenseReducerContext.Provider>
    )
}
