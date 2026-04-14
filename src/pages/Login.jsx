import "../styles/login.css"
import { FaUser, FaLock } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Login() {
    const navigate = useNavigate()
    const [id, setId] = useState(() => localStorage.getItem("userId") || "")

    function handleLogin(event) {
        event.preventDefault()
        localStorage.setItem("userId", id)
        navigate("/dashboard")
    }

    return (
        <div className="container-login">
            <div className="card-login">
                <form className="login" onSubmit={handleLogin}>
                    <div className="container-logo">
                        <div className="logo">
                            <img src="/FitForge.png" alt="Logo Fit Forge" />
                        </div>
                    </div>
                    <h1 className="title-login">Acesse o sistema</h1>
                    <div className="input-box">
                        <input
                            type="number"
                            placeholder="ID"
                            className="input-label"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                        <FaUser className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Senha" className="input-label" />
                        <FaLock className="icon" />
                    </div>
                    <button className = "button-login" type="submit">Entrar</button>
                </form>
            </div>
        </div>
    )
}