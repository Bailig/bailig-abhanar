import { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Pie, HorizontalBar, defaults } from 'react-chartjs-2';

const chartTypes ={
    bar: "bar",
    pie: "pie"
}

defaults.global.defaultFontFamily = 'Open Sans'

const chart = ({data, options, title}, chartType) => 
    <div key={title} className="chart floating-box">
        <h3>{title}</h3>
        {chartType === chartTypes.bar ? <HorizontalBar data={data} options={options}/> : <Pie data={data} />}
    </div>


export default class Content extends Component {
     componentWillMount() {
        this.props.onLoad()
    }
    render() {
        return (
            <div className="skill-content section-content col-xs-12 col-md-9 col-md-offset-3" >
                {this.props.pieCharts.map( p => chart(p, chartTypes.pie))}
                {this.props.barCharts.map( b => chart(b, chartTypes.bar))}
                <NavLink onClick={() => this.props.onBack()} to={{pathname: "/", hash: "#section-skill"}} className="btn-group clearfix">
                    <button type="button" className="glyphicon glyphicon glyphicon-chevron-left btn-square"></button>
                    <span className="btn-span ">BACK</span>
                </NavLink>
            </div>
        )
    }
}
