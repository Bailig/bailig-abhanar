import { NavLink } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'

const header = () => (
    <div className="skill-header col-xs-12">
        <h1 className="section-title col-xs-9 col-xs-offset-3 floating-box">Interests & Skills</h1>
        <div className="image-skill col-xs-9 col-xs-offset-1 floating-box"></div>
        <NavLink to="/skill" className="btn-group">
            <button type="button" className="glyphicon glyphicon-menu-hamburger btn-square"></button>
            <span className="btn-span ">CHECK OUT MORE</span>
        </NavLink>
    </div>
)

export default header;

// <img className="col-xs-9 col-xs-offset-1 img-responsive floating-box" src="assets/plant.jpg" alt="Image"></img>