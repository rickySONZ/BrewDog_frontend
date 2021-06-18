import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser, getProfileFetch } from '../actions/auth';
import Logout from './Logout';

class Home extends Component {

    componentWillMount = () => {
        this.props.getProfileFetch()
    }

    handleClick = event => {
        event.preventDefault()
        localStorage.removeItem("token")
        this.props.logoutUser()
    }

    render() {
       
        return (
            <div>
                <Logout />
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    currentUser: state.signInR.currentUser
  })

  const mapDispatchToProps = dispatch => ({
    getProfileFetch: () => dispatch(getProfileFetch()),
      logoutUser: () => dispatch(logoutUser())
  })

export default connect(mapStateToProps, mapDispatchToProps)(Home);
