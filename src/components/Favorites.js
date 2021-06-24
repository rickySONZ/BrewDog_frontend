import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { clearSearchedBreweries } from '../actions/brewery';
import { getFavorites } from '../actions/favorite';
import Favorite from './Favorite';

const Favorites = (props) => {

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getFavorites())
        
        return () => {
            
        };
    }, []);

    return (
        <div className = "breweries-container">
        <ul>
            {props.favorites.map(f => {
                if (f.brewery){
                return <Favorite 
                key = {f.id}
                name={f.brewery.name}
                id={f.id}
                address={f.brewery.address}
                city = {`${f.brewery.city}, ${f.brewery.state}`}
                checked = {true}
            /> } else {
                let g = props.breweries.find(b => b.id === f.brewery_id)
                return <Favorite 
                key = {f.id}
                name={g.name}
                id={f.id}
                address={g.address}
                city = {`${g.city}, ${g.state}`}
                checked = {true}
            />
            }
            
             })}
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



export default connect(mapStateToProps, null)(Favorites);
