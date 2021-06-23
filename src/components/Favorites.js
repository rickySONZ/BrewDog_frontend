import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { clearSearchedBreweries } from '../actions/brewery';
import { getFavorites } from '../actions/favorite';
import Favorite from './Favorite';



const Favorites = (props) => {

    useEffect(() => {
        props.getFavorites()
        props.clearSearchedBreweries()
        return () => {
            
        };
    }, []);

    return (
        <div className = "breweries-container">
        <ul>
            {props.favorites.map(f => <div className={`favorite-brewery-${f.id}`}>
            <Favorite 
                name={f.brewery.name}
                id={f.id}
                address={f.brewery.address}
                city = {`${f.brewery.city}, ${f.brewery.state}`}
                checked = {true}
            /> 
            
            </div> )}
            </ul>
        </div>
    );
}

const mapStateToProps = state => {
    return({
        currentUser: state.signInR.currentUser,
        favorites: state.favoritesR.favorites,
        breweries: state.breweriesR.breweries
    })
}

const mapDispatchToProps = dispatch => ({
    getFavorites: () => dispatch(getFavorites()),
    clearSearchedBreweries: () => dispatch(clearSearchedBreweries())
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
