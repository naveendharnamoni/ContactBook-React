import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className="menu">
        <ul>
            <li><Link to="/">HOME</Link></li>
            <li onClick={props.clicked}><Link id="add" to="/add">+ADD</Link></li>
         </ul>
        <img className="image-menu" height="24px" width="24px" src="blog-icon.png"/>
    </div>
    )
}

export default Navbar
