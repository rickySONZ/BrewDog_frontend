import React from 'react';
import { connect } from 'react-redux';


const Favorite = () => {
    return (
        <div>
            <li></li>
        </div>
    );
}

const mapStateToProps = (state) => {
    return ({breweries: state.breweriesR.breweries,
    currentUser: state.signInR.currentUser})
}

 export default connect(mapStateToProps)(Favorite);
