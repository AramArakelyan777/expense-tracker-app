import { createContext, useState, useEffect } from "react"

export const ExpenseContext = createContext(null)

export const ExpenseContextProvider = ({ children }) => {
    const [date, setDate] = useState(null)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log('Date value changed:', date);
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, [date])

    const handleDateChange = (e) => {
        setDate(e.target.value)
    }


    const [expenseAmmount, setExpenseAmmount] = useState()

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log('Expense ammount value changed:', expenseAmmount);
        }, 1000)

        return () => clearTimeout(timeoutId)
    }, [expenseAmmount])

    const handleAmmountChange = (e) => {
        setExpenseAmmount(e.target.value)
    }


    const [description, setDescription] = useState("")

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log('Description value changed:', description);
        }, 1000)

        return () => clearTimeout(timeoutId)
    }, [description])

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }


    return <ExpenseContext.Provider value={{ date, expenseAmmount, description, handleDateChange, handleAmmountChange, handleDescriptionChange }}>{children}</ExpenseContext.Provider>
}
