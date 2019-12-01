const initialState = {
	countries : []
};

const country = (countries = initialState.countries, action) => {
	switch (action.type) {
		case 'FETCH_COUNTRIES':
			return [
				...action.payload
			];
		default:
			return countries;
	}
};

export default country;
