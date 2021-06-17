import React, { Component } from 'react';
import { getBreweries } from '../actions/brewery';

class Home extends Component {

    componentDidMount() {
        // return (dispatch) => {
        fetch("http://localhost:8080/api/v1/breweries")
        .then(resp=> resp.json())
        .then(data => console.log(data))
        // .then(breweries => {
        //     dispatch({
        //         type: "GET_BREWERIES",
        //         payload: breweries
        //     })
        // })
    // }
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Home;
