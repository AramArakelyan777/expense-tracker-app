import { useState, useEffect } from "react"
import { useAuth } from "./auth"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import "../../assets/text.css"
import Button from "../Button/Button"

function Login() {
    const [user, setUser] = useState("")
    const auth = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (auth.user) navigate("/", { replace: true })
    }, [auth.user, navigate])

    return (
        <div>
            <h1 className="main-header">
                Unlock the door to financial insights. Log in now.
            </h1>
            <p>
                Your financial journey is just a login away. Experience the
                convenience of tracking,
                <br />
                managing, and optimizing your expenses—all in one secure place.
            </p>
            <form className="loginForm">
                <input
                    className="username input-light"
                    placeholder="Enter Your Username"
                    type="text"
                    onChange={(evt) => setUser(evt.target.value)}
                    name="username-login"
                />
                <br />
                <Button
                    className="button login"
                    onClick={() => {
                        auth.login(user)
                        navigate("/", { replace: true })
                    }}
                >
                    Log In
                </Button>
            </form>
        </div>
    )
}

export default Login
