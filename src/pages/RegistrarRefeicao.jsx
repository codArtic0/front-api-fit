import { useState } from "react"
import "../styles/refeicao.css"
import { registrarAlimento } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function RegistrarRefeicao(){
    const navigate = useNavigate()
    const [alimento,setAlimento] = useState("")
    const [qtd, setQtd] = useState("")

    async function handleConfirm(e){
        e.preventDefault()
        
        const id = localStorage.getItem("userId");
        console.log(id)
        
        const data = {
            idUser: id,
            g: qtd,
            alimento: alimento
        }

        console.log(data)
        await registrarAlimento(data)
        navigate('/dashboard')
    }
    
    return(
        <>
            <div className="refeicao-container">
                <div className="card-refeicao">
                    <h1>REGISTRAR REFEIÇÃO</h1>
                    <form className="form-refeicao">
                        <div className="input-group">
                            <input type="text" placeholder="Nome do alimento" onChange={(e)=>setAlimento(e.target.value)}/>
                            <input type="number" placeholder="Quantidade (g)" onChange={(e)=>setQtd(e.target.value)}/>
                        </div>
                        <button className="confirmar-button" onClick={(e) => handleConfirm(e)}> Confirmar</button>
                    </form>
                </div>
             </div>

        </>
    )
}