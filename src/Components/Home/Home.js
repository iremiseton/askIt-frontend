import React, { Component } from 'react';

import Nav from "../Nav"
import UserPanel from "../UserPanel"
import Posts from "../Posts"

export default class Home extends Component {
  
  	render() {
		return (
			<div className="Home">
				<Nav />

                <div className="container-fluid">
                    <div className="row h-100">

                        <div className="col-lg-2 col-md-4 col-sm-12 border-right">
                            <UserPanel />
                        </div>

                        <div className="col-lg-7 col-md-8 col-sm-12 bg-light pt-3 border-right">
                            <Posts />
                        </div>

                        <div className="col-3">

                        </div>

                    </div>
                </div>
			</div>
		);
	}
}


