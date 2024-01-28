import './App.css'
import { Routes, Route } from "react-router-dom"
import HomePage from "./components/Home/HomePage"
import Navbar from "./components/Navbar/Navbar"
import Login from "./components/Login/Login"
import NotFound from "./components/NotFound"
import { AuthProvider } from './components/Login/auth'
import RequireAuth from "./components/Login/RequireAuth"
import User from "./components/Login/User"

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Navbar />
                <Routes>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/user" element={<RequireAuth><User /></RequireAuth>} />
                </Routes>
            </AuthProvider>
        </div>
    )
}

export default App
