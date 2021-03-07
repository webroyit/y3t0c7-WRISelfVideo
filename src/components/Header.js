import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideocamIcon from '@material-ui/icons/Videocam';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className="header">
            <MenuIcon />
            <img
                className="header__logo"
                src="logo.png"
                alt="Logo" />
            <input type="text" />
            <SearchIcon />
            <VideocamIcon />
            <AppsIcon />
            <NotificationsIcon />
            <Avatar alt="Roy Web" src="1" />
        </div>
    );
}

export default Header;
