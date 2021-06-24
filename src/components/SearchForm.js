import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import {  getSearchedBreweries } from '../actions/brewery';



function SearchForm(props) {

    const [searchCity, setSearchCity] = useState('')
    const [searchState, setSearchState] = useState('')

    const dispatch = useDispatch()

    function handleSubmit(event){
        event.preventDefault()
        let filteredBreweries = props.breweries.filter(b => b.city.toLowerCase() == searchCity.toLowerCase() && b.state.toLowerCase() == searchState.toLowerCase())
        dispatch(getSearchedBreweries(filteredBreweries))
    }


    return (
        <>
            <form className="search-form" onSubmit={handleSubmit}>
                <input type="text" value={searchCity} placeholder="Search City" onChange={e => setSearchCity(e.target.value)} />
                <input type="text" value={searchState} placeholder="Search State" onChange={e => setSearchState(e.target.value)}/>
                <input type="submit" value="Search For Breweries!" />
            </form>
        </>
    );
}

const mapStateToProps = state => {
    return ({breweries: state.breweriesR.breweries,
    currentUser: state.signInR.currentUser,
searchedBreweries: state.breweriesR.searchedBreweries})
}

export default connect(mapStateToProps, null)(SearchForm);
