import React from 'react';

const Navbar = (props) => {
    return (
        <div className="menu">
        <ul>
            <li><a href="#">HOME</a></li>
            <li onClick={props.clicked}><a id="add" href="#add">+ADD</a></li>
         </ul>
        <img className="image-menu" height="24px" width="24px" src="blog-icon.png"/>
    </div>
    )
}

export default Navbar
