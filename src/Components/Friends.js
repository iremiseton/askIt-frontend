import React, { Component } from "react"

export default class Friends extends Component {
    render() {
        return(
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

                <h6>@pierre<span className="ml-2 badge badge-pill badge-success">online</span></h6>
                <h6>@iremise<span className="ml-2 badge badge-pill badge-success">online</span></h6>
                <h6>@elg<span className="ml-2 badge badge-pill badge-success">online</span></h6>
                <h6>@dachri<span className="ml-2 badge badge-pill badge-danger">offline</span></h6>
                <h6>@abri<span className="ml-2 badge badge-pill badge-danger">offline</span></h6>

                <br />
                <a href="localhost" className="text-center">Show more</a>
                <hr />
            </div>            
        )
    }
}