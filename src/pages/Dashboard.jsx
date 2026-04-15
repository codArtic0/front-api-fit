import "../styles/dashboard.css"
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/useUserStore";
import { useEffect } from "react";
import Charts from '../components/Charts';
import PageError from "./PageError";
import Loading from "./Loading";

export default function Dashboard() {
    const navigate = useNavigate()
    const { user, isLoading, fetchUser } = useUserStore();

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    if (isLoading) return <Loading />;

    if (!user) return <PageError />

    const dataCalorias = [
        { name: 'Consumidas', value: user.caloriasDoDia, fill: '#3C8B4C' },
        { name: 'Faltam', value: Math.max(0, user.calorias - user.caloriasDoDia), fill: '#757575' },
    ];

    const dataProteinas = [
        { name: 'Consumidas', value: user.proteinasDoDia, fill: '#3C8B4C' },
        { name: 'Faltam', value: Math.max(0, user.proteinas - user.proteinasDoDia), fill: '#757575' },
    ];

    const dataCarboidratos = [
        { name: 'Consumidas', value: user.carboidratosDoDia, fill: '#3C8B4C' },
        { name: 'Faltam', value: Math.max(0, user.carboidratos - user.carboidratosDoDia), fill: '#757575' },
    ];

    const dataGorduras = [
        { name: 'Consumidas', value: user.gordurasDoDia, fill: '#3C8B4C' },
        { name: 'Faltam', value: Number((Math.max(0, user.gorduras - user.gordurasDoDia)).toFixed(2)), fill: '#757575' },
    ];

    function handleClick() {
        navigate("/registrarRefeicao")
    }
    return (
        <>
            <div className="dashboard-container">
                <div className="title-dashboard">
                    <h1>DASHBOARD</h1>
                </div>
                <div className="charts">
                    <div className="charts-wrapper">
                        <h2 className="title-charts">CALORIAS</h2>
                        <Charts data={dataCalorias} />
                    </div>
                    <div className="charts-wrapper">
                        <h2 className="title-charts">CARBOIDRATOS</h2>
                        <Charts data={dataCarboidratos} />
                    </div>
                    <div className="charts-wrapper">
                        <h2 className="title-charts">PROTEINAS</h2>
                        <Charts data={dataProteinas} />
                    </div>
                    <div className="charts-wrapper">
                        <h2 className="title-charts">GORDURAS</h2>
                        <Charts data={dataGorduras} />
                    </div>
                </div>
                <div className="button-group">
                    <button className="button-dashboard" onClick={handleClick}> Registrar Refeição </button>
                </div>
            </div>

        </>
    )
}