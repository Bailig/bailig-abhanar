import { NavLink } from 'react-router-dom'



export const menu = ({menuButtonClassName="", menuNavClassName="", loginLinkClassName="", onToggleMenu, onScrollTo}) => {

    const onNavLinkClicked = (targetId) => {
        onToggleMenu()
        onScrollTo(targetId)
    }

    return (
        <div>
            <button onClick={() => onToggleMenu()} type="button" className={"hidden-md hidden-lg btn-menu glyphicon btn-square " + menuButtonClassName}></button>
            <div className={"menu col-md-3" + menuNavClassName}>
                <nav>
                    <NavLink onClick={() => onNavLinkClicked("#section-about")} to={{pathname: "/", hash: "#section-about"}} activeClassName=" ">ABOUT</NavLink>
                    <NavLink onClick={() => onNavLinkClicked("#section-skill")} to={{pathname: "/", hash: "#section-skill"}} activeClassName=" ">INTEREST & SKILL</NavLink>
                    <NavLink onClick={() => onNavLinkClicked("#section-work")} to={{pathname: "/", hash: "#section-work"}} activeClassName=" ">WORK</NavLink>
                    <NavLink onClick={() => onNavLinkClicked("#section-contact")} to={{pathname: "/", hash: "#section-contact"}} activeClassName=" ">CONTACT</NavLink>
                    <NavLink onClick={() => onNavLinkClicked()} to="/login" activeClassName=" active">LOGIN</NavLink>
                </nav>
            </div>
        </div>
    )
}

    


export default menu