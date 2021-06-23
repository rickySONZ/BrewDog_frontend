import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFavorites } from '../actions/favorite';
import Brewery from './Brewery';

const Breweries = (props) => {     

    useEffect(() => {
        return () => {
            props.getFavorites()
        };
    }, []);

    if(props.searchedBreweries.length > 0 && props.favorites){

    return (
        <div className="breweries-container">
            <ul>
                { 
                    props.searchedBreweries.map(b => { 
                        
                        return <Brewery
                    name={b.name}
                    key={b.id}
                    id={b.id}
                    address={b.address}
                    city={b.city}
                    state={b.state}
                    url={b.url}
                    latitude={b.latitude}
                    longitude={b.longitude}
                    phone={b.phone}
                    postalcode={b.postalcode}
                    checked = {props.favorites.find(f => f.brewery_id === b.id) ? true : false} 

                    />})}
                    
            </ul>
        </div>
    );
} else {
    return (
        <div className="breweries-container">
            <ul>
                <h2>Use The Search Bars Above To Find Breweries<br/> In Any City The United States</h2>
            </ul>
        </div>
    )
}}

const mapStateToProps = state => {
    return ({breweries: state.breweriesR.breweries,
    currentUser: state.signInR.currentUser,
searchedBreweries: state.breweriesR.searchedBreweries,
favorites: state.favoritesR.favorites})
}

const mapDispatchToProps = dispatch => ({
    getFavorites: () => dispatch(getFavorites())
})

export default connect(mapStateToProps, mapDispatchToProps)(Breweries);
