import { Pie, HorizontalBar, defaults } from 'react-chartjs-2';

const chartTypes ={
    bar: "bar",
    pie: "pie"
}

defaults.global.defaultFontFamily = 'Open Sans'

const chart = ({data, options, title}, chartType) => 
    <div key={title} className="chart floating-box">
        <h3>{title}</h3>
        {
            chartType === chartTypes.bar ? 
            <HorizontalBar data={data} options={options}/> :
            <Pie data={data} />
        }
    </div>


export const content = ({pieCharts, barCharts}) => 
    <div className="skill-content col-xs-12" >
        {pieCharts.map( p => chart(p, chartTypes.pie))}
        {barCharts.map( b => chart(b, chartTypes.bar))}
    </div>


export default content