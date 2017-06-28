import { connect } from 'react-redux'
import  content  from '../components/content'   
import { fetchSkill } from '../../../modules/skills/actions'
import { scrollTo } from '../../../modules/menu/actions'

const skillTypes = {
    frontend: 'frontend',
    backend: 'backend',
    ios: 'ios'

}

const getPieChartData = ({design, frontend, backend, ios}) => {
    return {
        labels: ["Design", "Front-end", "Back-end", "iOS"],
        datasets: [{
            data: [design, frontend, backend, ios],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)'
            ],
            hoverBackgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ]
        }],
        
    }
}

const getBarChartLabelsAndData = (skill, skillType) => {
    if (skillType === skillTypes.frontend) {
        return {
            labels: ['HTML', 'CSS', 'SASS', 'Bootstrap', 'JavaScript', 'jQuery', 'React', 'Redux'],
            data: [skill.html, skill.css, skill.sass, skill.bootstrap, skill.javascript, skill.jquery, skill.react, skill.redux]
        }
    }
    else if (skillType === skillTypes.backend) {
        return {
            labels: ['C#', 'ASP.NET', 'SQL Server', 'Python', 'Node', 'Express', 'PostgreSQL'],
            data: [skill.cSharp, skill.asp, skill.sqlServer, skill.python, skill.node, skill.express, skill.postgres]
        }
    }
    else if (skillType === skillTypes.ios) {
        return {
            labels: ['Swift', 'Objective-C', 'CoreData', 'Firebase'],
            data: [skill.swift, skill.objectiveC, skill.coreData, skill.firebase ]
        }
    }
}

const getBarChartData = (skill, skillType) => {
    let labelsAndData = getBarChartLabelsAndData(skill, skillType)
    return {
        labels: labelsAndData.labels,
        datasets: [
            {
                data: labelsAndData.data,
                label: '',
                backgroundColor: 'rgba(96, 125, 139, 0.4)',
                borderWidth: 0,
                hoverBackgroundColor: 'rgba(96, 125, 139, 0.8)'
            }
        ]
    }
}

const getBarChartOptions = () => {
    return {
        title: {
            display: true,
            text: '1 Beginner ... 5 Proficient',
            fontStyle: 'normal'
        },
        layout: {
            padding: {
                left: 5
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
    	display: false
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItem) {
                    return tooltipItem.xLabel;
                }
            }
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    
    return {
        pieCharts: [{
            data: getPieChartData(state.skill.personalInterest),
            title: "Personal Interest",
            chartType: "pie"
        }, {
            data: getPieChartData(state.skill.workExperience),
            title: "Work Experience",
            chartType: "pie"
        }],
        barCharts: [{
            data: getBarChartData(state.skill.frontendSkill, skillTypes.frontend),
            options: getBarChartOptions(),
            title: "Front-end",
            chartType: "bar"
        }, {
            data: getBarChartData(state.skill.backendSkill, skillTypes.backend),
            options: getBarChartOptions(),
            title: "Back-end",
            chartType: "bar"
        }, {
            data: getBarChartData(state.skill.iosSkill, skillTypes.ios),
            options: getBarChartOptions(),
            title: "iOS",
            chartType: "bar"
        }]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => {
            dispatch(fetchSkill())
        },
        onBack: () => {
            dispatch(scrollTo("#section-skill"))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(content)
