import { Pie, HorizontalBar, defaults } from 'react-chartjs-2';

defaults.global.defaultFontFamily = 'Open Sans'

const chart = ({data, options, title, chartType}) => 
    <div  className="chart floating-box">
        <h3>{title}</h3>
        {chartType === "bar" ? <HorizontalBar data={data} options={options}/> : <Pie data={data} />}
    </div>

export default chart