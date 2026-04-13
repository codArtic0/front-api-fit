
import "../styles/login.css"
import { FaUser, FaLock } from "react-icons/fa"
import {useNavigate} from "react-router-dom";

export default function Login(){
    const navigate = useNavigate()

    function handleLogin(){
        navigate("/");
    }

   return (
    <div className="container-login">
        <div className="card-login">
            <form className="login">
                <div className="container-logo">
                    <div className="logo">
                        <img src="/FitForge.png" alt="Logo Fit Forge" />
                    </div>
                </div>
                <h1 className="title">Acesse o sistema</h1>
                <div className="input-box">
                    <input type="number" placeholder="ID" className="input-label"/>
                    <FaUser className="icon"></FaUser>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Senha" className="input-label"/>
                    <FaLock className="icon"/>
                </div>
                <button onClick={handleLogin}>Entrar</button>
            </form>
        </div>
    </div>
   )
}