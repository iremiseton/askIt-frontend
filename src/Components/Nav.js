import React, { Component } from 'react';

import "../Components/css/Nav.css"

export default class Nav extends Component {
  
  	render() {
		return (
			<div className="Nav">
				<nav className="navbar navbar-dark bg-dark">
                    <span className="navbar-brand mb-0 h1 NavTitle">AskIt</span>
                </nav>
			</div>
		);
	}
}


