import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getFavorites } from '../actions/favorite';
import Brewery from './Brewery'; 


const Breweries = () => {    
    
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.signInR.currentUser)
    const breweries = useSelector(state => state.breweriesR.breweries)
    const searchedBreweries = useSelector(state => state.breweriesR.searchedBreweries)
    const favorites = useSelector(state => state.favoritesR.favorites)

    useEffect(() => {
        return () => {
            dispatch(getFavorites())
        };
    }, []);

    if(searchedBreweries.length > 0 && favorites){

    return (
        <div className="breweries-container">
            <ul>
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
                <h2>Use The Search Bars Above To Find Breweries<br/> In Any City The United States</h2>
            </ul>
        </div>
    )
}}


export default connect(null, null)(Breweries);
