import React from 'react';
import Logout from './Logout'


const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href ={`users/${localStorage.user_id}/favorites`}>Favorites</a></li>
                    <Logout />
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
