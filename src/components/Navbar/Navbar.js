import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import logo from "../../assets/img/logo.png"
import { useAuth } from '../Login/auth'
import Tippy from '@tippy.js/react'
import "tippy.js/dist/tippy.css"

export default function Navbar() {
    const auth = useAuth()
    return (
        <nav className="navbar">
            <NavLink to="/">
                <img alt="logo" src={logo} className="logo" />
            </NavLink>
            <div className="navbar-links">
                {!auth.user ?
                    <Tippy content="Log in first to visit the expenses page" delay={500}>
                        <NavLink to="/expenses">Expenses</NavLink>
                    </Tippy> : <NavLink to="/expenses">Expenses</NavLink>}

                {!auth.user ?
                    <Tippy content="Log in first to visit the user page" delay={500}>
                        <NavLink to="/user">User</NavLink>
                    </Tippy> : <NavLink to="/user">User</NavLink>}

                {!auth.user && (
                    <NavLink to="/login">Login</NavLink>
                )}
            </div>
        </nav>
    )
}
