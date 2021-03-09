import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideocamIcon from '@material-ui/icons/Videocam';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

import './Header.css';

function Header() {
    const [inputSearch, setInputSearch] = useState('');

    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <Link to="/">
                    <img
                        className="header__logo"
                        src="logo.png"
                        alt="Logo"
                    />
                </Link>
                
            </div>

            <div className="header__input">
                <input 
                    value={inputSearch}
                    placeholder="Search" type="text"
                    onChange={e => setInputSearch(e.target.value)}
                />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton" />
                </Link>
            </div>

            <div className="header__icons">
                <VideocamIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar alt="Roy Web" src="1" />
            </div>
        </div>
    );
}

export default Header;
