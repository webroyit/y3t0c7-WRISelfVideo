import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

import './Sidebar.css';
import SidebarRow from './SidebarRow';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={TrendingUpIcon} title="Trending" />
            <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
        </div>
    );
}

export default Sidebar;
