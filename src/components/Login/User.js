import { useNavigate } from "react-router-dom"
import { useAuth } from "./auth"
import "./Login.css"

function User() {
    const auth = useAuth()
    const navigate = useNavigate()

    return (
        <div>
            <h1 className="logoutHeader">Logout and return when you need us.</h1>
            <p>Thank you for trusting us with your financial journey, {auth.user}.</p>
            <button className="logOut" onClick={() => {
                auth.logout()
                navigate("/")
            }}>Log Out</button>
        </div>
    )
}

export default User
