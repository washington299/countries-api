import axios from "axios";

const api = axios.create({
	baseURL: "https://restcountries.eu/rest/v2",
});

export const getAllCountries = async () => {
	const res = await api.get("all");

	return res;
};

export const filterCountriesPerPage = (countries, offset, limit) => {
	const countriesQuantity = countries.length;
	const countriesPaginated = countries.slice(offset, limit + offset);

	return { countriesPaginated, countriesQuantity };
};
