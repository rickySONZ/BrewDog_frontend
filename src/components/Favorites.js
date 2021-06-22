import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFavorites } from '../actions/favorite';
import Favorite from './Favorite';



const Favorites = (props) => {

    useEffect(() => {
        props.getFavorites()
        return () => {
            
        };
    }, []);

    return (
        <div className = "breweries-container">
        <ul>
            {props.favorites.map(f => <Favorite 
                name={f.brewery.name}
                key={f.brewery.id}
                address={f.brewery.address}
                city = {`${f.brewery.city}, ${f.brewery.state}`}
            />)}
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
    getFavorites: () => dispatch(getFavorites())
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
