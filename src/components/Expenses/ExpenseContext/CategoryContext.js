import { createContext, useReducer } from "react"

export const CategoryContext = createContext(null)

const categoryReducer = (state, action) => {
    switch (action.type) {
        case "ADD_A_CATEGORY":
            return [
                ...state,
                {
                    id: Math.round(Math.random() * 10000000),
                    name: action.payload.category,
                },
            ]
        default:
            return state
    }
}

export const CategoryContextProvider = ({ children }) => {
    const [categoriesState, dispatchCategories] = useReducer(
        categoryReducer,
        []
    )

    const addACategory = (category) =>
        dispatchCategories({
            type: "ADD_A_CATEGORY",
            payload: { category },
        })

    return (
        <CategoryContext.Provider value={{ categoriesState, addACategory }}>
            {children}
        </CategoryContext.Provider>
    )
}
