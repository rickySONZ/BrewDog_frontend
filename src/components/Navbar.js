import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { getProfileFetch, logoutUser } from '../actions/auth';


function Navbar(props) {

    const history = useHistory()
    useEffect(() => {
       
        return () => {
            handleClick()
        };
    }, []);

    async function handleClick(){
        
        await props.logoutUser();
        localStorage.removeItem("token")
        localStorage.removeItem("user_id")
        history.replace('/login')
        window.location.reload()
        
    }

   
    return (
        <div>    
            <NavLink to="/">Home</NavLink>
            <NavLink to ={`/users/${props.currentUser.id}/favorites`}>Favorites</NavLink>
            <NavLink to="/login" onClick={handleClick} >Logout</NavLink>    
        </div>
    );
    
}
const mapStateToProps = (state) => ({
    currentUser: state.signInR.currentUser
  })

  const mapDispatchToProps = dispatch => ({
    getProfileFetch: () => dispatch(getProfileFetch()),
      logoutUser: () => dispatch(logoutUser())
  })

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
