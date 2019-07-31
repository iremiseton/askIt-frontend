import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";


import Home from "./Components/Home/Home"
import Login from "./Components/Authenticator/Login"
import Register from "./Components/Authenticator/Register"

export default class App extends Component {
  
  	render() {
		return (
			<div className="App">
				<Router>
					<Route path="/" exact component={Home} />
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
				</Router>
			</div>
		);
	}
}


