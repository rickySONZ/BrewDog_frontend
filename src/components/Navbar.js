import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { getProfileFetch, logoutUser } from '../actions/auth';
import Logout from './Logout';
class Navbar extends Component {

    // handleClick = event => {
    //     event.preventDefault()
    //     localStorage.removeItem("token")
    //     localStorage.removeItem("user_id")
    //     this.props.logoutUser()
    // }

    render(){
    return (
        <div>    
            <NavLink to="/">Home</NavLink>
            <NavLink to ={`/users/${localStorage.user_id}/favorites`}>Favorites</NavLink>
            <NavLink to="/login" ><Logout/></NavLink>      
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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
