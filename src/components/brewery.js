import React from 'react';
import { connect } from 'react-redux';
import { deleteFavorite } from '../actions/favorite';

const Brewery = (props) => {
    const handleCheck = (event) => {
        if (event.target.checked === true){
            
            //dispatch an action to add this to my favorites state
        } else if (event.target.checked === false){
            
            let favId = props.favorites.find(f => f.brewery.id === props.id).id
            debugger
            props.deleteFavorite(favId)
        }
    }
    return (
        <div>

            <li><b>{props.name}</b><br/>
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
    favorites: state.favoritesR.favorites
})

const mapDispatchToProps = dispatch => ({
    deleteFavorite: (favoriteInfo) => dispatch(deleteFavorite(favoriteInfo))
})



export default connect(mapStateToProps, mapDispatchToProps)(Brewery);
