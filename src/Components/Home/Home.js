import React, { Component } from 'react';

import Nav from "../Nav"
import UserPanel from "../UserPanel"
import Posts from "../Posts"

export default class Home extends Component {
  
  	render() {
		return (
			<div className="Home">

                <div className="container-fluid" style={{minHeight: 100 + "vh"}}>
                    <div className="row" style={{minHeight: 100 + "vh"}}>

                        <div className="col-lg-2 col-md-4 col-sm-12 border-right" style={{minHeight: 100 + "vh"}}>
                            <UserPanel />
                        </div>

                        <div className="col-lg-10 col-md-8 col-sm-12 bg-light pt-3" style={{minHeight: 100 + "vh"}}>
				            <Nav />
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


