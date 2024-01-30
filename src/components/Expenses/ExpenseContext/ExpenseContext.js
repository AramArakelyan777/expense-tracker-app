import { createContext, useState, useEffect } from "react"

export const ExpenseContext = createContext(null)

export const ExpenseContextProvider = ({ children }) => {
    const [date, setDate] = useState(null)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log("Date value changed:", date)
        }, 2000)

        return () => clearTimeout(timeoutId)
    }, [date])

    const handleDateChange = (value) => setDate(value)

    const [expenseAmmount, setExpenseAmmount] = useState(null)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log("Expense ammount value changed:", expenseAmmount)
        }, 2000)

        return () => clearTimeout(timeoutId)
    }, [expenseAmmount])

    const handleAmmountChange = (value) => setExpenseAmmount(value)

    const [description, setDescription] = useState("")

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log("Description value changed:", description)
        }, 2000)

        return () => clearTimeout(timeoutId)
    }, [description])

    const handleDescriptionChange = (value) => setDescription(value)

    return (
        <ExpenseContext.Provider
            value={{
                handleDateChange,
                handleAmmountChange,
                handleDescriptionChange,
            }}
        >
            {children}
        </ExpenseContext.Provider>
    )
}
