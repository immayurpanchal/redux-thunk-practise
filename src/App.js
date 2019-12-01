import React from 'react';
import Country from './components/Country';
import Search from './components/Search';
import { connect } from 'react-redux';

class App extends React.Component {
	render () {
		return (
			<div>
				<Search />
				{this.props.countries.map((country, index) => (
					<Country key={index} name={country.name} capital={country.capital} />
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { countries: state };
};

export default connect(mapStateToProps)(App);
