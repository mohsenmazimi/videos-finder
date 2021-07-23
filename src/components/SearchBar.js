import { React, Component } from "react";

class SearchBar extends Component {
	state = {
		term: "",
	};
	// onchange form input Search
	onChangeSearch = (e) => {
		this.setState({ term: e.target.value });
	};
	// On Submit From Search and change state
	onSubmitSearch = (e) => {
		// prevent default
		e.preventDefault();
		// add state in callBack
		this.props.onSubmit(this.state.term)
	};
	render() {
		// distructures array
		const { onSubmitSearch, onChangeSearch } = this;
		const { term } = this.state;
		return (
			<div>
				<form onSubmit={onSubmitSearch}>
					<div className='mb-3 w-75 m-auto'>
						<label htmlFor='exampleInputEmail1' className='form-label'>
							Search videos
						</label>
						<input
							type='text'
							className='form-control'
							id='exampleInputEmail1'
							aria-describedby='emailHelp'
							placeholder='Search videos...'
							value={term}
							onChange={onChangeSearch}
						/>
					</div>
					<div className='mx-auto my-4 text-center'>
						<button type='submit' className='btn btn-primary w-75 '>
							Search
						</button>
					</div>
				</form>
			</div>
		);
	}
}
export default SearchBar;
