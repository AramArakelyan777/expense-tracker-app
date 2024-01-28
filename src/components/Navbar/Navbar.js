import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/">Logo</NavLink>
        </nav>
    )
}
