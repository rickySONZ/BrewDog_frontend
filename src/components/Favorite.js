import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { deleteFavorite } from '../actions/favorite';



const Favorite = (props) => {

    const dispatch = useDispatch()
    const [checkedState, setCheckedState] = useState(props.checked);
    let fav_id = props.id
    return (
        <>
            <li key={props.name}><b>{props.name}</b><br />
                {props.address}<br />
                {props.city}
            </li> <input type="checkbox"
                id={`checkbox-${props.id}`}
                key={fav_id}
                defaultChecked={checkedState}
                onClick={() => dispatch(deleteFavorite(fav_id))}

            />
        </>
    );
}


export default connect(null, null)(Favorite);
