import React, { useState, useEffect } from 'react';

import getCountries from '../../../services/api';

import Country from '../../../components/Country';

import Container from './styles';

const Content = ({ currentPage }) => {
	const [countries, setCountries] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function getCountriesFromApi() {
			const countriesPerPage = 12;
			const { res } = await getCountries(currentPage, countriesPerPage);

			setCountries(res);
			setLoading(false);
		}
		getCountriesFromApi();
	}, [currentPage]);

	return (
		<Container>
			{loading && (
				<span style={{ textAlign: 'center' }}>Loading...</span>
			)}
			{countries.map((country) => (
				<Country
					key={country.name}
					flag={country.flag}
					name={country.name}
					population={country.population}
					region={country.region}
					capital={country.capital}
				/>
			))}
		</Container>
	);
};

export default Content;
