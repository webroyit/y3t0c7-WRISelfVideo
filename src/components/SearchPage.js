import React from 'react';
import Filter1Icon from '@material-ui/icons/Filter1';

import './SearchPage.css';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

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

            <hr />

            <VideoRow
                views={875}
                subs="1.2K"
                description="Show the city in the morning.  There are many stores and cars."
                timestamp="3 dsys ago"
                channel="Something abc"
                title="The views of the city"
                image="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            <VideoRow
                views={875}
                subs="1.2K"
                description="A good day to ride my bike in the city on a sunny day"
                timestamp="3 dsys ago"
                channel="Bike Riding"
                title="Riding a bike in the city"
                image="https://images.unsplash.com/photo-1501147830916-ce44a6359892?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmlrZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            <VideoRow
                views={875}
                subs="1.2K"
                description="A good day to play tennis with my friends on a sunnday day"
                timestamp="3 dsys ago"
                channel="Tennis Player"
                title="Play Tennis"
                image="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVubmlzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
        </div>
    );
}

export default SearchPage;
