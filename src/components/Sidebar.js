import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import HistoryIcon from '@material-ui/icons/History';
import PersonalVideoIcon from '@material-ui/icons/PersonalVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreIcon from '@material-ui/icons/More';

import './Sidebar.css';
import SidebarRow from './SidebarRow';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={TrendingUpIcon} title="Trending" />
            <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
            <hr />
            <SidebarRow Icon={LocalLibraryIcon} title="Library" />
            <SidebarRow Icon={HistoryIcon} title="History" />
            <SidebarRow Icon={PersonalVideoIcon} title="Your Videos" />
            <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
            <SidebarRow Icon={FavoriteIcon} title="Favorite Videos" />
            <SidebarRow Icon={MoreIcon} title="Show More" />
            <hr />
        </div>
    );
}

export default Sidebar;
