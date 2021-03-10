import React from 'react';
import Filter1Icon from '@material-ui/icons/Filter1';

import './SearchPage.css';
import ChannelRow from './ChannelRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <Filter1Icon />
                <h2>Filter</h2>
            </div>
            
            <hr />

            <ChannelRow
                image="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2t5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                channel="Something abc"
                verified
                subs="1.2K"
                noOfVideos={10}
                description="Something interseting about the world and to learn more about it"
            />
        </div>
    );
}

export default SearchPage;
