import React from 'react';
import { connect } from 'react-redux';


const Favorite = (props) => {
    return (
        <div>
            <li>{props.name}</li>
        </div>
    );
}



 export default (Favorite);
