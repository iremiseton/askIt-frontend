import React, { Component } from 'react'

import "./css/UserPanel.css"

import Logo from "./Logo"
import Friends from "./Friends"
import Follows from "./Follows"

export default class UserPanel extends Component {
  
  	render() {
		return (
			<div className="UserPanel h-100 d-flex flex-column">

                <Logo />

                <Friends />

                <Follows />

			</div>
		);
	}
}


