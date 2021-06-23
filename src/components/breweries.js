import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFavorites } from '../actions/favorite';
import Brewery from './Brewery';




const Breweries = (props) => {
    if(props.searchedBreweries.length > 0){
    return (
        <div className="breweries-container">
            <ul>
                { 
                    props.searchedBreweries.map(b =>  <Brewery
                    name={b.name}
                    key={b.id}
                    address={b.address}
                    city={b.city}
                    state={b.state}
                    url={b.url}
                    latitude={b.latitude}
                    longitude={b.longitude}
                    phone={b.phone}
                    postalcode={b.postalcode}
                    checked = {props.favorites.find(f => f.brewery.id === b.id) ? true : false} 

                    />)}
                    
            </ul>
        </div>
    );
} else {
    return (
        <div className="breweries-container">
            <ul>
                
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

export default connect(mapStateToProps)(Breweries);
