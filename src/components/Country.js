import React from 'react';

const Country = (props) => {
	const { name, capital } = props;
	return (
		<div>
			<span>
				<b>Country : </b>
			</span>
			<span>{name}</span>
			<br />
			<span>
				<b>Capital : </b>
			</span>
			<span>{capital}</span>
		</div>
	);
};

export default Country;
