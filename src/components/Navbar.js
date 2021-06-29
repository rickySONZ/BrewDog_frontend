import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutUser } from '../actions/auth';
import { clearSearchedBreweries } from '../actions/brewery';
import { clearFavoritesOnLogout } from '../actions/favorite';



function Navbar() {

    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.signInR.currentUser)

  function handleClick(){  
        dispatch(logoutUser());
        dispatch(clearFavoritesOnLogout())
        dispatch(clearSearchedBreweries())
        localStorage.removeItem("token")
        localStorage.removeItem("user_id")   
    }

    return (
        <div className="navbar">
        {/* <img src={process.env.PUBLIC_URL + } />     */}
            <NavLink className="navlink-logo" to ="/"><img id="nav-link-logo" src={process.env.PUBLIC_URL + '/kisspng-beer-brewing-grains-malts-india-pale-ale-bitter-underdog-5b3160d5c657c4.2574535915299627098124.jpg'}/></NavLink>
            <NavLink className="navlink-logo-text" to="/">BrewDog</NavLink>
            <NavLink className="navlink" to="/">Home</NavLink>
            <NavLink className="navlink" to ={`/users/${currentUser.id}/favorites`}>Favorites</NavLink>
            <NavLink className="navlink" to="/login" onClick={handleClick} >Logout</NavLink>    
        </div>
    );
    
}

export default connect(null, null)(Navbar);
