import Alert from '@material-ui/lab/Alert';
import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { removeError } from '../actions/auth';
import { getFavorites } from '../actions/favorite';
import Brewery from './Brewery'; 



const Breweries = () => {    
    
    const dispatch = useDispatch()
    const searchedBreweries = useSelector(state => state.breweriesR.searchedBreweries)
    const favorites = useSelector(state => state.favoritesR.favorites)
    const error = useSelector(state => state.signInR.error)

    useEffect(() => {
        dispatch(getFavorites())
        return () => {
            dispatch(removeError())
        };
    }, []);

    if(searchedBreweries.length > 0 && favorites){

    return (
        <div className="breweries-container">
            <ul>
            <h3 className="favorite-title">Favorite?</h3>
            <h3>Breweries Sniffed Out</h3>
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
} else if (error && error.length > 0){
return(
    <div className="breweries-container">
            <ul>
                <h3>Use The Search Bars Above To Find Breweries<br/> In Any City The United States</h3>
                <Alert key={Math.random(100000)} severity="error" style={{width:'80%'}}>
    {String(error)}
  </Alert>
            </ul>
        </div>
)
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