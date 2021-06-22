import React, { useState } from 'react';
import { connect } from 'react-redux';

const Favorite = (props) => {

    const [checkedState, setCheckedState] = useState(props.checked);
    
    return (
        <>
            <li><b>{props.name}</b><br/>
            {props.address}<br />
            {props.city}
            </li> <input type="checkbox"
        defaultChecked={checkedState}
        onChange={() => setCheckedState(!checkedState)}
      />
        </>
    );
}


 export default (Favorite);
