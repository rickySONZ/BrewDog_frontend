import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { addFavorite, deleteFavorite } from '../actions/favorite';


const Brewery = (props) => {

    const favorites = useSelector(state => state.favoritesR.favorites)

    const dispatch = useDispatch()
    const handleCheck = (event) => {
        if (event.target.checked === true) {
            dispatch(addFavorite(props.id))
        }
        else if (event.target.checked === false) {
            let favId = favorites.find(f => f.brewery_id === props.id).id
            dispatch(deleteFavorite(favId))
        }
    }
    return (
        <div>

            <li key={props.key}><b>{props.name}</b><br />
                {props.address}<br />
                {`${props.city} - ${props.state}`}
            </li><input type="checkbox"
                defaultChecked={
                    props.checked
                }
                onChange={e => handleCheck(e)}
            />
        </div>
    );
}


export default connect(null, null)(Brewery);
