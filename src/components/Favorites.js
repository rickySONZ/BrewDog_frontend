import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getFavorites } from '../actions/favorite';
import Favorite from './Favorite';



const Favorites = (props) => {

    const [checkedItems, setCheckedItems] = useState({}); //plain object as state

    const handleSingleCheck = e => {
        setCheckedItems({...checkedItems, [e.target.name]: e.target.checked})
    }
    
    useEffect(() => {
        props.getFavorites()
        setCheckedItems(props.favorites.map(f =>
            
            f.id))
        return () => {
            
        };
    }, []);

    return (
        <div className = "breweries-container">
        <ul>
            {props.favorites.map(f => <div className={`favorite-brewery-${f.id}`}>
            <Favorite 
                name={f.brewery.name}
                key={f.brewery.id}
                address={f.brewery.address}
                city = {`${f.brewery.city}, ${f.brewery.state}`}
                checked = {true}
            /> 
            {/* <input input type= "checkbox"
            name={f.name}
            key={f.brewery.id}
            onChange = {handleSingleCheck}
            checked = {checkedItems[f.id]}
            /> */}
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
    getFavorites: () => dispatch(getFavorites())
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
