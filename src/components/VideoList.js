import React from 'react';
import VideoItem from './VideoItem'
const VideoList = ({ videos,getVideoSelected }) => {
  // console.log(videos);

  return (
    videos.map(video => {
      return (
        <div className="container"  key={video.id.videoId}>
          <div className="row">
          <VideoItem getVideoSelected={getVideoSelected} video={video}/>
            </div>
          </div>
        );
      })
    )
}

export default VideoList;