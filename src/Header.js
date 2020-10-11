//functional component- components always capitalized files
    //functional component returning JSX (HTML+JavaScript)

import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';


//ES6: const Header = () => 

function Header() {
    return (
        //BEM naming convention
        <div className="header">
            <IconButton>
            <PersonIcon className="header__icon" fontSize="large"/>
            </IconButton>
            
            {/* <img src= 'images/promatch_logo.png' alt="logo"/> */}
            <img className="header__logo" alt="logo" src={require('./images/gitr_png.png')} />
            
            <IconButton>
            <ForumIcon className="header__icon" fontSize="large"/>
            </IconButton>
            
        </div>
    )
}

export default Header
