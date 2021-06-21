import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFavorites } from '../actions/favorite';


const Favorites = (props) => {

    useEffect(() => {
        props.getFavorites()
        return () => {
            
        };
    }, []);

    return (
        <div>
            
        </div>
    );
}

const mapStateToProps = state => {
    return({
        currentUser: state.signInR.currentUser,
        favorites: state.favoritesR.favorites
    })
}

const mapDispatchToProps = dispatch => ({
    getFavorites: () => dispatch(getFavorites())
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
