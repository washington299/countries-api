import React, { useState, useEffect } from 'react';

import getCountries from '../../../services/api';

import Country from '../../../components/Country';

import Container, { Loading } from './styles';

const Content = ({ currentPage }) => {
	const [countries, setCountries] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function getCountriesFromApi() {
			setLoading(true);
			setCountries([]);

			const countriesPerPage = 12;
			const { res } = await getCountries(currentPage, countriesPerPage);

			setCountries(res);
			setLoading(false);
		}
		getCountriesFromApi();
	}, [currentPage]);

	return (
		<>
			{loading && <Loading>Loading...</Loading>}
			<Container>
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
		</>
	);
};

export default Content;
