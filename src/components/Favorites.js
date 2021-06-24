import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { clearSearchedBreweries } from '../actions/brewery';
import { getFavorites } from '../actions/favorite';
import Favorite from './Favorite';

const Favorites = () => {

    const dispatch = useDispatch()
    const breweries = useSelector(state => state.breweriesR.breweries)
    const favorites = useSelector(state => state.favoritesR.favorites)

    useEffect(() => {
        dispatch(getFavorites())
        
        return () => {
            
        };
    }, []);

    return (
        <div className = "breweries-container">
        <ul>
            {favorites.map(f => {
                if (f.brewery){
                return <Favorite 
                key = {f.id}
                name={f.brewery.name}
                id={f.id}
                address={f.brewery.address}
                city = {`${f.brewery.city}, ${f.brewery.state}`}
                checked = {true}
            /> } else {
                let g = breweries.find(b => b.id === f.brewery_id)
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





export default connect(null, null)(Favorites);
