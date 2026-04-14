import { PieChart, Pie, Legend, Tooltip } from 'recharts';
import { PIE_THEME } from '../constants/chartsStyles';

const Charts = ({ data }) => (
  <PieChart width={250} height={250}>
    <Pie 
      data={data} 
      dataKey="value" 
      {...PIE_THEME} 
    />
    <Legend
      wrapperStyle={{ fontFamily: 'Montserrat', fontSize: '14px' }}
      verticalAlign="bottom"
      align="center"
      layout="horizontal"
    />
    <Tooltip /> 
  </PieChart>
);

export default Charts;