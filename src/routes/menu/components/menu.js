import { NavLink } from 'react-router-dom'


export const menu = ({menuButtonClassName="", menuNavClassName="", onToggleMenu, onScrollTo}) => (
    <div>
        <button onClick={() => onToggleMenu()} type="button" className={"hidden-md hidden-lg btn-menu glyphicon btn-square " + menuButtonClassName}></button>
        <div className={"menu col-md-3" + menuNavClassName}>
            <nav>
                <NavLink onClick={() => onScrollTo("#section-about")} to={{pathname: "/", hash: "#section-about"}} activeClassName=" ">ABOUT</NavLink>
                <NavLink onClick={() => onScrollTo("#section-skill")} to={{pathname: "/", hash: "#section-skill"}} activeClassName=" ">INTEREST & SKILL</NavLink>
                <NavLink onClick={() => onScrollTo("#section-work")} to={{pathname: "/", hash: "#section-work"}} activeClassName=" ">WORK</NavLink>
                <NavLink onClick={() => onScrollTo("#section-contact")} to={{pathname: "/", hash: "#section-contact"}} activeClassName=" ">CONTACT</NavLink>
            </nav>
        </div>
    </div>
)

    


export default menu