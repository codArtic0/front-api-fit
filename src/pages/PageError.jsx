import "../styles/pageerror.css";

export default function PageError() {
    return (
        <div className="error-container">
            <div className="sadBear">
                <img src="/sadBear.png" alt="Urso Triste" />
            </div>
            <h1 className="title-error">Servidor fora do ar!</h1>
            <h2 className="description"> Sentimos muito, mas infelizmente houve um erro em nossos servidores. Nossa equipe consertará o mais rápido possível</h2>
        </div>
    )
}