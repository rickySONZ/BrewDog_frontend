import React from 'react';

const Brewery = (props) => {
    return (
        <div>

            <li>{props.name}<br></br>{props.address}</li>
        </div>
    );
}

export default Brewery;
