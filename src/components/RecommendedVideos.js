import React from 'react';

import './RecommendedVideos.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                <VideoCard
                    image="https://images.unsplash.com/photo-1615266895738-11f1371cd7e5?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    title="The Dog"
                    channel="Cute Pets"
                    views="100K"
                    timestamp="5 days ago"
                    channelImage="1" />
               <VideoCard
                    image="https://images.unsplash.com/photo-1615240592098-b2b1eb547fba?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    title="City View"
                    channel="NYC View"
                    views="12K"
                    timestamp="4 days ago"
                    channelImage="1" />
                <VideoCard
                    image="https://images.unsplash.com/photo-1615266895738-11f1371cd7e5?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    title="The Dog"
                    channel="Cute Pets"
                    views="100K"
                    timestamp="5 days ago"
                    channelImage="1" />
                <VideoCard
                    image="https://images.unsplash.com/photo-1615266895738-11f1371cd7e5?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    title="The Dog"
                    channel="Cute Pets"
                    views="100K"
                    timestamp="5 days ago"
                    channelImage="1" />
                <VideoCard
                    image="https://images.unsplash.com/photo-1615266895738-11f1371cd7e5?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    title="The Dog"
                    channel="Cute Pets"
                    views="100K"
                    timestamp="5 days ago"
                    channelImage="1" />
                <VideoCard
                    image="https://images.unsplash.com/photo-1615266895738-11f1371cd7e5?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    title="The Dog"
                    channel="Cute Pets"
                    views="100K"
                    timestamp="5 days ago"
                    channelImage="1" />
            </div>
        </div>
    );
}

export default RecommendedVideos;
