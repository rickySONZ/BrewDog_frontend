import React from 'react';
import { connect } from 'react-redux';
import Brewery from './Brewery';



const Breweries = (props) => {
    return (
        <div className="breweries-container">
            <ul>
                {props.searchedBreweries.map(b => <Brewery
                    name={b.name}
                    key={b.id}
                    address={b.address}
                    city={b.city}
                    state={b.state}
                    url={b.url}
                    latitude={b.latitude}
                    longitude={b.longitude}
                    phone={b.phone}
                    postalcode={b.postalcode}
                    

                />)} 
            </ul>
        </div>
    );
}

const mapStateToProps = state => {
    return ({breweries: state.breweriesR.breweries,
    currentUser: state.signInR.currentUser,
searchedBreweries: state.breweriesR.searchedBreweries})
}

export default connect(mapStateToProps)(Breweries);
