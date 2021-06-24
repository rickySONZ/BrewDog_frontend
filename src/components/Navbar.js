import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getProfileFetch, logoutUser } from '../actions/auth';
import { clearSearchedBreweries } from '../actions/brewery';
import { clearFavoritesOnLogout } from '../actions/favorite';



function Navbar(props) {

    const dispatch = useDispatch()

  function handleClick(){  
        dispatch(logoutUser());
        dispatch(clearFavoritesOnLogout())
        dispatch(clearSearchedBreweries())
        localStorage.removeItem("token")
        localStorage.removeItem("user_id")   
    }

    return (
        <div>
        {/* <img src={process.env.PUBLIC_URL + } />     */}
            <NavLink className="navlink" to="/">Home</NavLink>
            <NavLink className="navlink" to ={`/users/${props.currentUser.id}/favorites`}>Favorites</NavLink>
            <NavLink className="navlink" to="/login" onClick={handleClick} >Logout</NavLink>    
        </div>
    );
    
}
const mapStateToProps = (state) => ({
    currentUser: state.signInR.currentUser
  })


export default connect(mapStateToProps, null)(Navbar);
