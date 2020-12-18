import axios from 'axios';

const api = axios.create({
	baseURL: 'https://restcountries.eu/rest/v2',
});

const getAllContries = async () => {
	const res = await api.get('all');

	return res;
};

export default async (currentPage, countriesPerPage) => {
	const startQuantityFrom = (currentPage - 1) * countriesPerPage;
	const getQuantityUntil = currentPage * 12;

	const countries = await getAllContries();
	const pagesQuantity = countries.data.length;
	const res = countries.data.slice(startQuantityFrom, getQuantityUntil);
	return { res, pagesQuantity };
};
