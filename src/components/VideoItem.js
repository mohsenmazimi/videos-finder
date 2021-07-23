import React from "react";

const VideoItem = ({ video, getVideoSelected }) => {
	const onClickVideo = () => {
		getVideoSelected(video);
	};
	return (
		<div onClick={onClickVideo} className='col3 border p-4 m-4'>
			<div className='row'>
				<div className='col-6'>
					<img
						src={video.snippet.thumbnails.medium.url}
						alt={video.snippet.title}
						className='img-fluid'
					/>
				</div>
				<div className='col-5'>
					<h5>{video.snippet.title}</h5>
					{/* <p>{video.snippet.description}</p> */}
				</div>
			</div>
		</div>
	);
};
export default VideoItem;
