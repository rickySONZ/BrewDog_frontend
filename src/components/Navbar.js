import React from 'react';
import Logout from './Logout'


const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <Logout />
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
