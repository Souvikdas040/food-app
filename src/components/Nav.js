import React from 'react'
import { Link } from 'react-router-dom';

import './Nav.css'
function Nav() {
    return (
        <div className='navMainContainer'>
            {/* <h2>MAIN CONTAINER</h2> */}
            <div className='navLContainer'>
                <h2>FoodApp</h2>
            </div>
            <div className='navRContainer'>
                <Link to='/food'>FOOD</Link>
                <Link to='/contact'>CONTACT US</Link>
            </div>
        </div>
    );
}

export default Nav
