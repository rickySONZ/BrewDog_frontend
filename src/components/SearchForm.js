import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { authError } from '../actions/auth';
import { getSearchedBreweries } from '../actions/brewery';


function SearchForm() {

    const [searchCity, setSearchCity] = useState('')
    const [searchState, setSearchState] = useState('Alabama')

    const dispatch = useDispatch()

    const breweries = useSelector(state => state.breweriesR.breweries)
    const error = useSelector(state => state.signInR.error)

    function handleSubmit(event) {
        event.preventDefault()
        let filteredBreweries = breweries.filter(b => b.city.toLowerCase() === searchCity.toLowerCase().trim() && b.state.toLowerCase() === searchState.toLowerCase().trim())
        console.log(searchState)
        if (filteredBreweries.length === 0) {
            dispatch(authError("I can't seem to find that town or anywhere in that town to get a beer!"))
        }
        dispatch(getSearchedBreweries(filteredBreweries))
    }
    return (
        <>
            <form className="search-form" onSubmit={handleSubmit}>
                <input type="text" value={searchCity} placeholder="Search City" onChange={e => setSearchCity(e.target.value)} />
                <select value={searchState} onChange={e => setSearchState(e.target.value)}>
                    <option value="Alabama">Alabama</option>
                    <option value="Alaska">Alaska</option>
                    <option value="Arizona">Arizona</option>
                    <option value="Arkansas">Arkansas</option>
                    <option value="California">California</option>
                    <option value="Colorado">Colorado</option>
                    <option value="Connecticut">Connecticut</option>
                    <option value="Delaware">Delaware</option>
                    <option value="Florida">Florida</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Hawaii">Hawaii</option>
                    <option value="Idaho">Idaho</option>
                    <option value="Illinois">Illinois</option>
                    <option value="Indiana">Indiana</option>
                    <option value="Iowa">Iowa</option>
                    <option value="Kansas">Kansas</option>
                    <option value="Kentucky">Kentucky</option>
                    <option value="Louisiana">Louisiana</option>
                    <option value="Maine">Maine</option>
                    <option value="Maryland">Maryland</option>
                    <option value="Massachusetts">Massachusetts</option>
                    <option value="Michigan">Michigan</option>
                    <option value="Minnesota">Minnesota</option>
                    <option value="Mississippi">Mississippi</option>
                    <option value="Missouri">Missouri</option>
                    <option value="Montana">Montana</option>
                    <option value="Nebraska">Nebraska</option>
                    <option value="Nevada">Nevada</option>
                    <option value="New Hampshire">New Hampshire</option>
                    <option value="New Jersey">New Jersey</option>
                    <option value="New Mexico">New Mexico</option>
                    <option value="New York">New York</option>
                    <option value="North Carolina">North Carolina</option>
                    <option value="North Dakota">North Dakota</option>
                    <option value="Ohio">Ohio</option>
                    <option value="Oklahoma">Oklahoma</option>
                    <option value="Oregon">Oregon</option>
                    <option value="Pennsylvania">Pennsylvania</option>
                    <option value="Rhode Island">Rhode Island</option>
                    <option value="South Carolina">South Carolina</option>
                    <option value="Tennessee">Tennessee</option>
                    <option value="Texas">Texas</option>
                    <option value="Utah">Utah</option>
                    <option value="Vermont">Vermont</option>
                    <option value="Virginia">Virginia</option>
                    <option value="Washington">Washington</option>
                    <option value="West Virginia">West Virginia</option>
                    <option value="Wisconsin">Wisconsin</option>
                    <option value="Wyoming">Wyoming</option>
                </select>
                <input type="submit" value="Search For Breweries!" />
            </form>
        </>
    );
}




export default connect(null, null)(SearchForm);