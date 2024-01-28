import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import logo from "../../assets/logo.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/">
                <img alt="logo" src={logo} className="logo" />
            </NavLink>
        </nav>
    )
}
