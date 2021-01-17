import React, { useState, useEffect } from 'react';

import getCountries from '../../../services/api';

import Container, { PageNumber } from './styles';

const Pagination = () => {
	const [pagesQuantity, setPagesQuantity] = useState(null);
	const pages = [];
	const currentPage = 1;

	useEffect(() => {
		async function getCountriesFromApi() {
			const countriesPerPage = 12;
			const { pagesQuantity: pgQuantity } = await getCountries(1, countriesPerPage);

			for (let i = 1; i <= 6; i += 1) {
				pages.push(i);
			}

			setPagesQuantity(Math.ceil(pgQuantity / countriesPerPage));
		}
		getCountriesFromApi();
	}, []);

	return (
		<Container>
			<PageNumber
				href={`?page=${currentPage - 1}`}
				style={currentPage === 1 ? { pointerEvents: 'none' } : {}}
			>
				&laquo;
			</PageNumber>
			{pages.map((page) => (
				<PageNumber
					key={page}
					active={page === currentPage}
					href={`?page=${page}`}
				>
					{page}
				</PageNumber>
			))}
			<PageNumber
				href={`?page=${currentPage + 1}`}
				style={currentPage === pagesQuantity ? { pointerEvents: 'none' } : {}}
			>
				&raquo;
			</PageNumber>
		</Container>
	);
};

export default Pagination;
