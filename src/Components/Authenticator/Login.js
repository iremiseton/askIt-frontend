import React, { Component } from "react"

import Logo from "../Logo"
import "../css/Auth.css"

export default class Login extends Component {
    render() {
        return (
            <div className="container-fluid auth-container text-white">
                <div className="row" style={{minHeight: 100 + "vh"}}>     
                    <div className="Login col-3 m-auto">
                        <div className="login-form">
                            <form action="/examples/actions/confirmation.php" method="post">
                                <h2 className="text-center">AskIt | Login</h2>      
                                <br />
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Username" required="required" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password" required="required" />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-outline-light btn-block">Log in</button>
                                </div>
                                <div className="clearfix">
                                    <label className="pull-left checkbox-inline"><input type="checkbox" /> Remember me</label>
                                    <a href="#" className="pull-right text-white">Forgot Password?</a>
                                </div>        
                            </form>
                            <p className="text-center"><a className="text-white" href="/register">Create an Account</a></p>
                        </div>
                    </div>
                </div>    
            </div>
        )
    }
}