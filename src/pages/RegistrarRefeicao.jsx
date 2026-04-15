import { useState } from "react"
import "../styles/refeicao.css"
import { registrarAlimento } from "../services/api";
import { useNavigate } from "react-router-dom";
import FoodDropdown from "../components/FoodDropdown";

export default function RegistrarRefeicao() {
    const navigate = useNavigate()
    const [alimento, setAlimento] = useState("")
    const [qtd, setQtd] = useState("")

    async function handleConfirm(e) {
        e.preventDefault()

        const id = localStorage.getItem("userId");

        const data = {
            idUser: id,
            g: qtd,
            alimento: alimento
        }

        await registrarAlimento(data)
        navigate('/dashboard')
    }

    return (
        <>
            <div className="refeicao-container">
                <div className="card-refeicao">
                    <h1>REGISTRAR REFEIÇÃO</h1>
                    <form className="form-refeicao">
                        <div className="input-group">
                            <FoodDropdown onChange={setAlimento} />
                            <input type="number" placeholder="Quantidade (g)" value={qtd} onChange={(e) => setQtd(e.target.value)} />
                        </div>
                        <button type="submit" className="confirmar-button" onClick={(e) => handleConfirm(e)}> Confirmar</button>
                    </form>
                </div>
            </div>

        </>
    )
}