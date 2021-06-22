import React from 'react';


const Brewery = (props) => {
    return (
        <div>

            <li><b>{props.name}</b><br/>
            {props.address}<br/>
            {`${props.city} - ${props.state}`}
            </li>
        </div>
    );
}

export default Brewery;
