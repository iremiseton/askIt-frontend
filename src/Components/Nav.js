import React, { Component } from 'react';

import "../Components/css/Nav.css"

export default class Nav extends Component {
  
  	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-transparent mb-5">

				<div className="nav-item">
					<a className="nav-link" href="localhost:3000">Dashboard</a>
				</div>
				
				<div className="navbar-nav ml-auto">

					<form className="nav-item form-inline mr-4">
						<div className="input-group rounded-pill border border-dark overflow-hidden mb-3">
							<input className="form-control border-0 rounded-0 bg-transparent" type="text" placeholder="Search" aria-label="Search" />
							<div className="input-group-append">
								<span className="input-group-text border-0 rounded-0 bg-transparent"><i className="material-icons">search</i></span>
							</div>
						</div>
					</form>

					<div className="nav-item" data-toggle="tooltip" data-placement="bottom" title="Notifications">
						<a className="nav-link" href="localhost:3000"><i className="material-icons">sms_failed</i></a>
					</div>

					<div className="nav-item" data-toggle="tooltip" data-placement="bottom" title="Ask new question">
						<a className="nav-link" href="localhost:3000"><i className="material-icons">create</i></a>
					</div>

					<div className="nav-item" data-toggle="tooltip" data-placement="bottom" title="Dark mode">
						<a className="nav-link" href="localhost:3000"><i className="material-icons">invert_colors</i></a>
					</div>

					<div className="nav-item" data-toggle="tooltip" data-placement="bottom" title="Settings">
						<a className="nav-link" href="localhost:3000"><i className="material-icons">settings</i></a>
					</div>

				</div>
			</nav>
		);
	}
}



