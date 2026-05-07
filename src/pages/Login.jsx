import "../styles/login.css"
import { FaUser, FaLock } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { loginUser } from "../services/api"

export default function Login() {
    const navigate = useNavigate()
    const [id, setId] = useState("")
    const [senha, setSenha] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    async function handleLogin(event) {
        event.preventDefault()
        setError("")
        setLoading(true)

        if (!id || !senha){
            setError("Preencha ID e Senha")
            setLoading(false)
            return
        }

        try {
            const response = await loginUser(id, senha)
            localStorage.setItem("userId", id)
            localStorage.setItem("userSenha", senha)
            localStorage.setItem("token", response.token)
            navigate("/dashboard")
        } catch (err) {
            setError(err.response?.data?.error || "Erro ao fazer login")
        } finally {
            setLoading(false)
        }
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
                    {error && <div style={{color: '#ff6b6b', marginBottom: '10px', textAlign: 'center'}}>{error}</div>}
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
                        <input type="password"
                        placeholder="Senha"
                        className="input-label"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        />
                        
                        <FaLock className="icon" />
                    </div>
                    <button className="button-login" type="submit" disabled={loading}>
                        {loading ? "Entrando..." : "Entrar"}
                    </button>
                </form>
            </div>
        </div>
    )
}