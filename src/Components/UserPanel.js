import React, { Component } from 'react';

import "./css/UserPanel.css"

export default class UserPanel extends Component {
  
  	render() {
		return (
			<div className="UserPanel h-100 d-flex flex-column">
				
                {/* Username */}
                <div className="card border-0 pt-5">
                    <h5 className="text-center">
                        <span className="fa fa-child mr-2"></span>
                        Username
                    </h5>
                    <hr />
                </div>

                {/* Friends */}
                <div className="card border-0">
                    <h5 className="text-center">
                        <span className="fa fa-code-fork mr-2"></span>
                        Friends
                    </h5>

                    <br />

                    <input 
                        type="text" 
                        className="form-control" 
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="Search by username..."
                    />

                    <br />

                    <h6>Pierre Le FIerere<span className="text-success text-right">[online]</span></h6>
                    <h6>Filip Kalioioio <span className="text-success">[online]</span></h6>
                    <h6>Erik ELgrymr <span className="text-success">[online]</span></h6>
                    <h6>Dachri master 127 <span className="text-danger">[offline]</span></h6>
                    <h6>Abra danger dager <span className="text-danger">[offline]</span></h6>

                    <br />
                    <a href="localhost" className="text-center">Show more</a>
                    <hr />
                </div>

                {/* Follows */}

                <div className="card border-0">
                    <h5 className="text-center">
                        <span className="fa fa-code-fork mr-2"></span>
                        Follows
                    </h5>

                    <br />

                    <input 
                        type="text" 
                        className="form-control" 
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="Search by username..."
                    />

                    <br />

                    <h6>Pierre Le FIerere</h6>
                    <h6>Filip Kalioioio</h6>
                    <h6>Erik ELgrymr</h6>
                    <h6>Dachri master 127</h6>
                    <h6>Abra danger dager</h6>

                    <br />

                    <a href="localhost" className="text-center">Show more</a>
                    <hr />

                </div>

			</div>
		);
	}
}


