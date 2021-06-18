import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getSearchedBreweries } from '../actions/brewery';


function SearchForm(props) {
    
    const initialState = ''

    const [searchCity, setSearchCity] = useState('')
    const [searchState, setSearchState] = useState('')
    const [searchedBreweries, setSearchedBreweries] = useState('');

    function handleSubmit(event){
        event.preventDefault()
        console.log(searchCity)
        console.log(searchState)
        let filteredBreweries = props.breweries.filter(b => b.city.toLowerCase() == searchCity.toLowerCase() && b.state.toLowerCase() == searchState.toLowerCase())
        setSearchedBreweries(filteredBreweries)
        console.log(searchedBreweries)
    }


    return (
        <div>
            <form className="search-form" onSubmit={handleSubmit}>
                <input type="text" value={searchCity} placeholder="Search City" onChange={e => setSearchCity(e.target.value)} />
                <input type="text" value={searchState} placeholder="Search State" onChange={e => setSearchState(e.target.value)}/>
                <input type="submit" value="Search For Breweries!" />
            </form>
        </div>
    );
}

const mapStateToProps = state => {
    return ({breweries: state.breweriesR.breweries,
    currentUser: state.signInR.currentUser})
}

const mapDispatchToProps = dispatch => ({
    getSearchedBreweries: () => dispatch(getSearchedBreweries())
})

export default connect(mapStateToProps)(SearchForm);
