import { NavLink } from 'react-router-dom'

const getClassNameFor = (pathName) => {
    return pathName === "/skill" ? " shrink" : ""
}

const header = ({ pathName }) => (
    <div className={"section-header col-xs-12 col-md-9 col-md-offset-3" + getClassNameFor(pathName)}>

        <div className="header-panel col-xs-9 col-xs-offset-1 floating-box">

            <h2 className="section-title">Interest & Skill</h2>

            <NavLink to="/skill" className="btn-group">
                <button type="button" className="glyphicon glyphicon-chevron-right btn-square"></button>
                <span className="btn-span ">CHECK OUT MORE</span>
            </NavLink>

            <p className="text-box floating-box">I have a great interest in following the latest trends, and I am eager to participate in any continuing education opportunities that are available.</p>

        </div>
    </div>
)

export default header;

