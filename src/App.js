import { React, Component } from "react";
import SearchBar from "./components/SearchBar";
import Youtube from "./components/apis/Youtube";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import './global.css';
class App extends Component {
	state = {
		videos: [],
		videoSelected:null,
		status: 0
	};
	onSubmitSearch = async (term) => {
		const response = await Youtube.get("search", {
			params: {
				q: term,
			},
		});
		this.setState({ videos: response.data.items, status: response.status,videoSelected:response.data.items[0] });
	};
	getVideoSelected = (video) => {
		this.setState({videoSelected:video})
	};
	renderContent() {
		const { videos, status } = this.state;
		if (status === 200) {
			return (
				<VideoList getVideoSelected={this.getVideoSelected} videos={videos} />
			);
		}
	}

	render() {
		return (
			<div>
				<SearchBar onSubmit={this.onSubmitSearch} />
				<div className='container'>
					<div className="d-flex">
					<div className="video-detail d-flex align-items-start flex-column bd-highlight mb-3">
						<VideoDetail video={this.state.videoSelected}/>
						</div>
					<div className='w-50 d-flex align-items-end flex-column bd-highlight mb-3'>
						<div className='video-item'>
							{this.renderContent()}		
						</div>
					</div>
						
					</div>
				</div>
			</div>
		);
	}
}

export default App;
