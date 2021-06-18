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
                this.props.logoutUser()
            }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Log Out</button>
            </div>
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



