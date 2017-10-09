
export const login = () => {
    return (
        <div className="row">
        <div className="form-panel col-md-8 col-md-offset-3 col-xs-12 floating-box">
            <form className="form col-sm-8 col-sm-offset-2">
                <h1 className="text-center">Hello</h1>
                <p className="text-center">Login as Admin</p>
                <div className="form-group">
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn-submit">Submit</button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default login