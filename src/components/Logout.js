import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfileFetch, logoutUser } from '../actions/auth';

class Logout extends Component {

    componentWillMount = () => {
        this.props.getProfileFetch()
    }

     handleClick = event => {
                event.preventDefault()
                localStorage.removeItem("token")
                localStorage.removeItem("user_id")
                this.props.logoutUser()
            }

    render() {
        return (
            <>
                <li><a onClick={this.handleClick} href="/login">Log Out</a></li>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getProfileFetch: () => dispatch(getProfileFetch()),
      logoutUser: () => dispatch(logoutUser())
  })

const mapStateToProps = (state) => ({
    currentUser: state.signInR.currentUser
  })

export default connect(mapStateToProps, mapDispatchToProps)(Logout);



