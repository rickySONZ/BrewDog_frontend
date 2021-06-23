import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getProfileFetch, logoutUser } from '../actions/auth';
import { clearFavoritesOnLogout } from '../actions/favorite';



function Navbar(props) {


    useEffect(() => {
       
        return () => {
            
        };
    }, []);

  function handleClick(){  
        props.logoutUser();
        props.clearFavoritesOnLogout()
        localStorage.removeItem("token")
        localStorage.removeItem("user_id")   
    }

   
    return (
        <div>    
            <NavLink className="navlink" to="/">Home</NavLink>
            <NavLink className="navlink" to ={`/users/${props.currentUser.id}/favorites`}>Favorites</NavLink>
            <NavLink className="navlink" to="/login" onClick={handleClick} >Logout</NavLink>    
        </div>
    );
    
}
const mapStateToProps = (state) => ({
    currentUser: state.signInR.currentUser
  })

  const mapDispatchToProps = dispatch => ({
    getProfileFetch: () => dispatch(getProfileFetch()),
      logoutUser: () => dispatch(logoutUser()),
      clearFavoritesOnLogout: () => dispatch(clearFavoritesOnLogout())
  })

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
