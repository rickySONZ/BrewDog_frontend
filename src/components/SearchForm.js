import React, { useState, setState } from 'react';
import { connect } from 'react-redux';


function SearchForm(props) {
    
    const initialState = ''

    const [searchCity, setSearchCity] = useState('')
    const [searchState, setSearchState] = useState('')
    const [searchedBreweries, setSearchedBreweries] = useState('');

    function handleSubmit(event){
        event.preventDefault()
        console.log(searchCity)
        console.log(searchState)
        let filteredBreweries = props.breweries.filter(b => b.city === searchCity && b.state === searchState)
        setSearchedBreweries(filteredBreweries)
        console.log(searchedBreweries)
        // console.log(searchedBreweries)
        // setSearchCity("")
        // setSearchState("")
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
    current_user: state.signInR.current_user})
}

export default connect(mapStateToProps)(SearchForm);
