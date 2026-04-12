import "../styles/login.css"
import { FaUser, FaLock } from "react-icons/fa"

export default function Login(){
   return (
    <div className="container-login">
        <div className="card-login">
            <form className="login">
                <h1 className="title">Acesse o sistema</h1>
                <div className="input-box">
                    <input type="number" placeholder="ID" className="input-label"></input>
                    <FaUser className="icon"></FaUser>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Nome" className="input-label"></input>
                    <FaLock className="icon"></FaLock>
                </div>
                <button>Entrar</button>
            </form>
        </div>
    </div>
   )
}