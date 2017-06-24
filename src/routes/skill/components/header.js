import { NavLink } from 'react-router-dom'

const getClassNameFor = (pathName) => {
    return pathName === "/skill" ? " shrink" : ""
}

const header = ({ pathName }) => (
    <div className={"section-header col-xs-12" + getClassNameFor(pathName)}>

        <div className="header-panel col-xs-9 col-xs-offset-1 floating-box">

            <h1 className="section-title floating-box">Interests & Skills</h1>

            <p className="text-box floating-box">A developer has a great interest in following the latest trends and is eager to participate in any continuing education opportunities that are available.</p>

            <NavLink to="/skill" className="btn-group">
                <button type="button" className="glyphicon glyphicon-menu-hamburger btn-square"></button>
                <span className="btn-span ">CHECK OUT MORE</span>
            </NavLink>

        </div>
    </div>
)

export default header;

// <img className="col-xs-9 col-xs-offset-1 img-responsive floating-box" src="assets/plant.jpg" alt="Image"></img>