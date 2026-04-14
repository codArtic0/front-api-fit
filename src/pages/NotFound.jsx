import "../styles/notfound.css"

export default function NotFound() {
    return(
        <div className="nf-container">
            <div className="urso">
                <img src="/confusedBear.png" alt="Urso confuso"/>
            </div>
            <div className="text-container">
                <h1>404, página não encontrada</h1>
                <h2>Lamentamos, mas essa página não existe!</h2>
            </div>
        </div>
    )
}