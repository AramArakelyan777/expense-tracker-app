import "./Button.css"
import React from "react"

export default function Button({ variant, children, ...props }) {
    return (
        <button className={`button ${variant}`} {...props}>
            {children}
        </button>
    )
}
