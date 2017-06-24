import { NavLink } from 'react-router-dom'

const getClassNameFor = (pathName) => {
    return pathName === "/skill" ? " shrink" : ""
}

const header = ({ pathName }) => (
    <div className={"skill-header col-xs-12" + getClassNameFor(pathName)}>
        <h1 className="section-title col-xs-9 col-xs-offset-3 floating-box">Interests & Skills</h1>
        <p className="col-xs-8 text-box floating-box">A developer has a great interest in following the latest trends and is eager to participate in any continuing education opportunities that are available.</p>
        <div className="image-skill col-xs-9 col-xs-offset-1 floating-box"></div>
        <NavLink to="/skill" className="btn-group">
            <button type="button" className="glyphicon glyphicon-menu-hamburger btn-square"></button>
            <span className="btn-span ">CHECK OUT MORE</span>
        </NavLink>
    </div>
)

export default header;

// <img className="col-xs-9 col-xs-offset-1 img-responsive floating-box" src="assets/plant.jpg" alt="Image"></img>