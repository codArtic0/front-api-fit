import "../styles/refeicao.css"

export default function RegistrarRefeicao(){
    return(
        <>
            <div className="refeicao-container">
                <div className="card-refeicao">
                    <h1>REGISTRAR REFEIÇÃO</h1>
                    <form className="form-refeicao">
                        <div className="input-group">
                            <input type="text" placeholder="Nome do alimento"/>
                            <input type="number" placeholder="Quantidade (g)"/>
                        </div>
                        <button className="confirmar-button"> Confirmar</button>
                    </form>
                </div>
             </div>

        </>
    )
}