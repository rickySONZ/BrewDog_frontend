import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser, getProfileFetch } from '../actions/auth';
import { clearSearchedBreweries } from '../actions/brewery';
import { getFavorites } from '../actions/favorite';
import Breweries from './Breweries';
import SearchForm from './SearchForm';
import Map from './Map'


class Home extends Component {

    render() {
        return (
            <>
                <SearchForm />
                <Breweries />
                <Map />
            </>
        );
    }
}
const mapStateToProps = (state) => ({
    currentUser: state.signInR.currentUser
})

const mapDispatchToProps = dispatch => ({
    getProfileFetch: () => dispatch(getProfileFetch()),
    logoutUser: () => dispatch(logoutUser()),
    clearSearchedBreweries: () => dispatch(clearSearchedBreweries()),
    getFavorites: () => dispatch(getFavorites())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
