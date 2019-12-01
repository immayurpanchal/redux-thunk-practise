import Axios from 'axios';

// Action creator
const fetchCountries = (country) => async (dispatch) => {
	const res = await Axios(`https://restcountries.eu/rest/v2/name/${country}`);
	dispatch({ type: 'FETCH_COUNTRIES', payload: res.data });
};

export default fetchCountries;

// Action
// return {
// 	type    : 'FETCH_COUNTRIES',
// 	payload : country
// };
