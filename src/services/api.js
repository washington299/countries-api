import axios from 'axios';

const api = axios.create({
	baseURL: 'https://restcountries.eu/rest/v2',
});

export default async (endpoint) => {
	const res = await api.get(endpoint);

	return res;
};
