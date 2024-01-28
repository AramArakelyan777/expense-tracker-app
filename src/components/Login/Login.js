import { useState, useEffect } from 'react'
import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom'


function Login() {
    const [user, setUser] = useState("")
    const auth = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (auth.user) navigate("/", { replace: true })
    }, [auth.user, navigate])

    return (
        <div>
            <label>
                <p>Username</p>
                <input className="username" placeholder="Enter Your Username" type='text' onChange={evt => setUser(evt.target.value)} />
            </label>
            <button className="logIn" onClick={() => {
                auth.login(user)
                navigate("/", { replace: true })
            }}>Log In</button>
        </div>
    )
}

export default Login
