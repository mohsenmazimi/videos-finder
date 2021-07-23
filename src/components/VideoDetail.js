import React from 'react';


const VideoDetail = ({ video }) => {
  if (!video) {
    return false;
  }
  console.log(video);
  let src = `http://www.youtube.com/embed/${video.id.videoId}`
  return (
    <div>
      <iframe src={src} type="text/html" width="640" height="390" title={video.snippet.title}>

      </iframe>
      </div>
    )
}
export default VideoDetail;