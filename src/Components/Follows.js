import React, { Component } from "react"

export default class Follows extends Component {
    render() {
        return (
            <div className="card border-0">
                <h5 className="text-center">
                    <span className="fa fa-code-fork mr-2"></span>
                    Followed tags
                </h5>

                <br />

                <input 
                    type="text" 
                    className="form-control" 
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="Search by tags..."
                />

                <br />

                <h6>Maths</h6>
                <h6>Swedish</h6>
                <h6>Cars</h6>
                <h6>Memes</h6>

                <br />

                <a href="localhost" className="text-center">Show more</a>
                <hr />

            </div>
        )
    }
}