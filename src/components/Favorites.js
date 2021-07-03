import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getFavorites } from '../actions/favorite';
import Favorite from './Favorite';
import FavoriteMap from './FavoriteMap';


const Favorites = () => {

    const dispatch = useDispatch()
    const breweries = useSelector(state => state.breweriesR.breweries)
    const favorites = useSelector(state => state.favoritesR.favorites)

    useEffect(() => {
        dispatch(getFavorites())
        
        return () => {
            
        };
    }, []);
if (favorites.length > 0 && favorites){
    return (
        <>
        <div className = "favorites-container">
        <ul>
        <h3 className="favorite-title">Delete?</h3>
            {favorites.map(f => {
                if (f.brewery){
                return <Favorite 
                key = {f.id}
                name={f.brewery.name}
                id={f.id}
                address={f.brewery.address}
                city = {`${f.brewery.city}, ${f.brewery.state}`}
                checked = {true}
            /> } else if (breweries.find(b => b.id === f.brewery_id)){
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
        <FavoriteMap />
        </>
    );
} else {
    return (
        <>
        <div className = "favorites-container">
            <h3>Find Some Favorite Breweries<br/>By Going To The Search Page</h3>
        </div>
        <FavoriteMap />
        </>
    )
}
}




export default connect(null, null)(Favorites);
