import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import "./Navbar.css"
import logo from "../../assets/img/logo.png"
import smallLogo from "../../assets/img/smallLogo.png"
import { useAuth } from "../Login/auth"
import Tippy from "@tippy.js/react"
import "tippy.js/dist/tippy.css"

export default function Navbar() {
    const auth = useAuth()

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600)

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 600)
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <nav className="navbar">
            <NavLink to="/">
                <img
                    alt="logo"
                    src={isSmallScreen ? smallLogo : logo}
                    className="logo"
                />
            </NavLink>
            <div className="navbar-links">
                {!auth.user ? (
                    <Tippy
                        content="Log in first to visit the expenses page"
                        delay={500}
                    >
                        <NavLink to="/expenses">Expenses</NavLink>
                    </Tippy>
                ) : (
                    <NavLink to="/expenses">Expenses</NavLink>
                )}

                {!auth.user ? (
                    <Tippy
                        content="Log in first to visit the user page"
                        delay={500}
                    >
                        <NavLink to="/user">User</NavLink>
                    </Tippy>
                ) : (
                    <NavLink to="/user">User</NavLink>
                )}

                {!auth.user && <NavLink to="/login">Login</NavLink>}
            </div>
        </nav>
    )
}
