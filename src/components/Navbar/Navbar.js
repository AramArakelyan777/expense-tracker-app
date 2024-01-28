import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import logo from "../../assets/img/logo.png"
import { useAuth } from '../Login/auth'

export default function Navbar() {
    const auth = useAuth()
    return (
        <nav className="navbar">
            <NavLink to="/">
                <img alt="logo" src={logo} className="logo" />
            </NavLink>
            <div className="navbar-links">
                <NavLink to="/expenses">Expenses</NavLink>
                <NavLink to="/user">User</NavLink>
                {!auth.user && (
                    <NavLink to="/login">Login</NavLink>
                )}
            </div>
        </nav>
    )
}
