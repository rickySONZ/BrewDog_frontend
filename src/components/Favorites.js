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
        <div className = "favorites-container">
            {props.favorites.map(f => <Favorite 
                name={props.breweries.find(f.brewery_id).name} //Pass it back from the back end so that we dont have O(n^ 2)
            />)}
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
