import React from 'react';


const Brewery = (props) => {
    return (
        <div>

            <li>{props.name}<br></br>{props.address}<br></br>{`${props.city} - ${props.state}`}</li>
        </div>
    );
}

export default Brewery;
