import { NavLink } from 'react-router-dom'
import { onScrollTo } from '../../utility/utility'


const getDelayFor = (pathName) => {
    return pathName === "/skill" || pathName === "/work" ? 700 : 0
}


export const menu = ({isShowingMenu, menuButtonClassName="", menuNavClassName="", onToggleMenu, pathName}) => (
    <div>
        <button onClick={() => onToggleMenu()} type="button" className={"hidden-md hidden-lg btn-menu glyphicon btn-square " + menuButtonClassName}></button>
        <div className={"menu col-md-3" + menuNavClassName}>
            <nav>
                <NavLink onClick={() => onScrollTo("#section-about", 0, onToggleMenu)} to={{pathname: "/", hash: "#section-about"}} activeClassName=" ">ABOUT</NavLink>
                <NavLink onClick={() => onScrollTo("#section-skill", getDelayFor(pathName), onToggleMenu)} to={{pathname: "/", hash: "#section-skill"}} activeClassName=" ">INTEREST & SKILL</NavLink>
                <NavLink onClick={() => onScrollTo("#section-work", getDelayFor(pathName), onToggleMenu)} to={{pathname: "/", hash: "#section-work"}} activeClassName=" ">WORK</NavLink>
                <NavLink onClick={() => onScrollTo("#section-contact", 0, onToggleMenu)} to={{pathname: "/", hash: "#section-contact"}} activeClassName=" ">CONTACT</NavLink>
            </nav>
        </div>
    </div>
)

    


export default menu