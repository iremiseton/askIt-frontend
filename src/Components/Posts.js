import React, { Component } from 'react';

const API = "http://83.251.241.212:3001/p"

export default class Posts extends Component {
  
    constructor(props) { 
        super(props)

        this.state = {
            hits: [],
            isLoading: false,
            error: "null"
        }
    }

    componentDidMount() {
        this.setState({isLoading: true})

        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({hits: data._posts, isLoading: false}))
            .catch(error => {
                alert(error)
                this.setState({error, isLoading: false})
            })
    }


    /*
        Renders fake data as [cards]
    */

    createFakeData = () => {

        let elements = []
        let titles = ["Programmering", "MatematikMatematikMatematikMatematikMatematikMatematik", "Kemi", "Fysik", "Svenska", "Engelska"]

        for (const [index, value] of titles.entries()) {
            elements.push(
                <div className="card border-0 shadow text-center col-3 mb-2 ml-2" style={{width: "18rem"}} key={index}>
                    <div className="card-body">
                        <h5 className="card-title">{value}</h5>
                        <p className="card-text">How does this work btw?</p>
                    </div>
                    <a href={index} style={{color: "gray"}}className="btn bg-light mb-1">More info</a>
                </div>
            )
        }

        return elements
    }


  	render() {
        const { hits, isLoading } = this.state

        if (isLoading) { return <p>Loading ...</p> }

		return (
			<div className="Posts row justify-content-center">
                {hits.map(post => 
                    <div key={post._id} className="card border-0 shadow text-center col-4 mb-2 ml-2">    
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.body}</p>
                        </div>
                        <a href={post._id} style={{color: "gray"}} className="btn bg-light">More info</a>
                    </div>
                )}        
			</div>
		);
	}
}




