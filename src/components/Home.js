import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/auth';


class Home extends Component {


    handleClick = event => {
        event.preventDefault()
        localStorage.removeItem("token")
        this.props.logoutUser()
    }

    render() {
        return (
            <div>
                {this.props.currentUser ? <button onClick={this.handleClick}>Log Out</button> : null}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    currentUser: state.signInR.currentUser
  })

  const mapDispatchToProps = dispatch => ({
      logoutUser: () => dispatch(logoutUser())
  })

export default connect(mapStateToProps, mapDispatchToProps)(Home);
