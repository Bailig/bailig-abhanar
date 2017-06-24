

export const header = () => {
    return(
        <div className={"work-header col-xs-12" + getClassNameFor(pathName)}>
            <h1 className="section-title col-xs-12 floating-box">Works</h1>
            <div className="image-work col-xs-9 col-xs-offset-1 floating-box"></div>
            <NavLink to="/skill" className="btn-group">
                <button type="button" className="glyphicon glyphicon-menu-hamburger btn-square"></button>
                <span className="btn-span ">CHECK OUT MORE</span>
            </NavLink>
        </div>
    )
}

export default header