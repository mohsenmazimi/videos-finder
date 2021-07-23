import axios from "axios";

const KEY = "AIzaSyB542jmoYnXT6mcn1c8VUXR5sOa1KTNCNU";

export default axios.create({
	baseURL: "https://youtube.googleapis.com/youtube/v3/",
	params: {
		part: "snippet",
		maxResults: 5,
		key: KEY,
	},
});
