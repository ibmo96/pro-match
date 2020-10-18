//functional component- components always capitalized files
    //functional component returning JSX (HTML+JavaScript)

import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';


//ES6: const Header = () => 

export function LoggedInHeader(){
    return (

        <div className="header">
            <IconButton>
                <PersonIcon className="header__icon" fontSize="large"/>
            </IconButton>     
            <img className="header__logo" alt="logo" src={require('./images/gitr_png.png')} />
            <IconButton>
                <ForumIcon className="header__icon" fontSize="large"/>
            </IconButton>
            
        </div>
    )

}

export function Header() {
    return (
        //BEM naming convention
        <div className="header">
            <img className="header__logo" alt="logo" src={require('./images/gitr_png.png')} />     
        </div>
    )
}


