import React, { Component } from "react"

import Logo from "../Logo"

export default class Register extends Component {
    render() {
        return (
            <div className="container-fluid auth-container text-white">
                <div className="row" style={{minHeight: 100 + "vh"}}>
                    <div className="Register col-3 m-auto">
                        <div className="login-form">
                            <form action="/examples/actions/confirmation.php" method="post">
                                <h2 className="text-center">AskIt | Register</h2>      
                                <br /> 
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Username" required="required" />
                                </div>       
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Email" required="required" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password" required="required" />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-outline-light btn-block">Register</button>
                                </div>
                            </form>
                            <p className="text-center"><a href="/login" className="text-white">Already have an account?</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}