import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getFavorites } from '../actions/favorite';
import Brewery from './Brewery'; 


const Breweries = () => {    
    
    const dispatch = useDispatch()
    const searchedBreweries = useSelector(state => state.breweriesR.searchedBreweries)
    const favorites = useSelector(state => state.favoritesR.favorites)

    useEffect(() => {
        dispatch(getFavorites())
        return () => {
            
        };
    }, []);

    if(searchedBreweries.length > 0 && favorites){

    return (
        <div className="breweries-container">
            <ul>
            <h3 className="favorite-title">Favorite?</h3>
                { 
                    searchedBreweries.map(b => { 
                        
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
                    checked = {favorites.find(f => f.brewery_id === b.id) ? true : false} 

                    />})}
                   
            </ul>
        </div>
    );
} else {
    return (
        <div className="breweries-container">
            <ul>
                <h3>Use The Search Bars Above To Find Breweries<br/> In Any City The United States</h3>
            </ul>
        </div>
    )
}}


export default connect(null, null)(Breweries);