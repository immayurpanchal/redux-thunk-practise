import React from 'react';
import { connect } from 'react-redux';
import fetchCountries from '../actions';

class Search extends React.Component {
	state = {
		inputText : ''
	};
	onInputChange = (e) => {
		this.setState({ inputText: e.target.value });
	};

	onSearch = () => {
		this.props.myfetchCountries(this.state.inputText);
	};
	render () {
		return (
			<div>
				<input type='text' onChange={this.onInputChange} />
				<button onClick={this.onSearch}>Search</button>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		myfetchCountries : (country) => dispatch(fetchCountries(country))
	};
};
export default connect(null, mapDispatchToProps)(Search);
