import React from 'react';
import { connect } from 'react-redux';


const Favorite = (props) => {
    return (
        <div>
            
        </div>
    );
}

mapStateToProps = (state) => {
    return ({breweries: state.breweriesR.breweries,
    currentUser: state.signInR.currentUser})
}

export default connect(mapStateToProps)(Favorite);
