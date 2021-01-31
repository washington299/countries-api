import axios from 'axios';

const api = axios.create({
	baseURL: 'https://restcountries.eu/rest/v2',
});

const getAllCountries = async () => {
	const res = await api.get('all');

	return res;
};

export default async (offset, limit) => {
	const countries = await getAllCountries();
	const countriesQuantity = countries.data.length;
	const res = countries.data.slice(offset, limit + offset);

	return { res, countriesQuantity };
};
