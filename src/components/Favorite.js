import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteFavorite, getFavorites } from '../actions/favorite';


const Favorite = (props) => {

    const [checkedState, setCheckedState] = useState(props.checked);
    let fav_id = props.id
    return (
        <>
            <li key = {props.name}><b>{props.name}</b><br/>
            {props.address}<br />
            {props.city}
            </li> <input type="checkbox"
            id={`checkbox-${props.id}`}
            key = {fav_id}
        defaultChecked={checkedState}
        // onChange={() => setCheckedState(!checkedState)}
        onClick={() => props.deleteFavorite(fav_id)}
        
      />
        </>
    );
}

const mapDispatchToProps = dispatch => ({
        deleteFavorite: (favoriteInfo) => dispatch(deleteFavorite(favoriteInfo))
})


 export default connect(null, mapDispatchToProps)(Favorite);
