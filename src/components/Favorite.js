import React from 'react';
import { connect } from 'react-redux';


const Favorite = (props) => {
    return (
        <>
        
            <li><b>{props.name}</b><br/>
            {props.address}<br />
            {props.city}
            </li>
        
        </>
    );
}



 export default (Favorite);
