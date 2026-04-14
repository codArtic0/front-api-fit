import "../styles/dashboard.css"

import Charts from '../components/Charts';

const dataTeste = [
  { name: 'Macros consumidos', value: 50, fill: '#3C8B4C' },
  { name: 'Faltam', value: 50, fill: '#A1CD47' },
];

export default function Dashboard(){
    return(
        <>
            <div className="dashboard-container">
                <div className="title-dashboard">
                    <h1>DASHBOARD</h1>
                </div>
                <div className="charts">
                    <div className="charts-wrapper">
                        <h2 className="title-charts">CALORIAS</h2>
                        <Charts data={dataTeste}/>
                    </div> 
                    <div className="charts-wrapper">
                        <h2 className="title-charts">PROTEINAS</h2>
                        <Charts data={dataTeste}/>
                    </div>
                    <div className="charts-wrapper">
                        <h2 className="title-charts">CARBOIDRATOS</h2>
                        <Charts data={dataTeste}/>
                    </div> 
                    <div className="charts-wrapper">
                        <h2 className="title-charts">GORDURAS</h2>
                        <Charts data={dataTeste}/>
                    </div> 
                </div>
                <div className="button-group">
                    <button className="button-dashboard"> Registrar Refeição </button>
                </div>
            </div>
            
        </>
    )
}