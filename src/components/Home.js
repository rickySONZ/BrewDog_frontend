import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser, getProfileFetch } from '../actions/auth';
import { clearSearchedBreweries } from '../actions/brewery';
import { getFavorites } from '../actions/favorite';
import Breweries from './Breweries';
import SearchForm from './SearchForm';


class Home extends Component {

    

    componentWillMount = () => {
        this.props.getProfileFetch()
    }

    componentWillUnmount = () => {
        this.props.clearSearchedBreweries()
    }

    render() {
        return (
            <div>
                <SearchForm />
                <Breweries />
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    currentUser: state.signInR.currentUser
  })

  const mapDispatchToProps = dispatch => ({
    getProfileFetch: () => dispatch(getProfileFetch()),
      logoutUser: () => dispatch(logoutUser()),
      clearSearchedBreweries: () => dispatch(clearSearchedBreweries())
  })

export default connect(mapStateToProps, mapDispatchToProps)(Home);
