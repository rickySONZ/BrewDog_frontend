import React from 'react';
import { connect } from 'react-redux';
import { addFavorite, deleteFavorite, getFavorites } from '../actions/favorite';


const Brewery = (props) => {
    const handleCheck = (event) => {
        if (event.target.checked === true){
            
            props.addFavorite(props.id)
            //dispatch an action to add this to my favorites state
        } else if (event.target.checked === false){
            
            let favId = props.favorites.find(f => f.brewery_id === props.id).id
           
            props.deleteFavorite(favId)
            // props.getFavorites()
        }
    }
    return (
        <div>

            <li key ={props.key}><b>{props.name}</b><br/>
            {props.address}<br/>
            {`${props.city} - ${props.state}`}
            </li><input type="checkbox"
                defaultChecked={
                    props.checked
                }
                onChange = {e => handleCheck(e)}
            />
        </div>
    );
}
const mapStateToProps = state =>({
    favorites: state.favoritesR.favorites,
    currentUser: state.signInR.currentUser
})

const mapDispatchToProps = dispatch => ({
    deleteFavorite: (favoriteInfo) => dispatch(deleteFavorite(favoriteInfo)),
    addFavorite: (favoriteInfo) => dispatch(addFavorite(favoriteInfo)),
    getFavorites: () => dispatch(getFavorites())
})



export default connect(mapStateToProps, mapDispatchToProps)(Brewery);
