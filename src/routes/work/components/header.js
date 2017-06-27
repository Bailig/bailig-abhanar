import { NavLink } from 'react-router-dom'

const getClassNameFor = (pathName) => {
    return pathName === "/work" ? " shrink" : ""
}

export const header = ({ pathName }) => (
    <div className={"section-header col-xs-12" + getClassNameFor(pathName)}>
    
        <div className="header-panel col-xs-8 col-xs-offset-3 floating-box">

            <h2 className="section-title floating-box">Work</h2>
            
            <p className="text-box floating-box">I have passion for the work and love to make something awesome.</p>

            <NavLink to="/work" className="btn-group">
                <span className="btn-span ">CHECK OUT MORE</span>
                <button type="button" className="glyphicon glyphicon-menu-hamburger btn-square"></button>
            </NavLink>

        </div>
    </div>
)


export default header

