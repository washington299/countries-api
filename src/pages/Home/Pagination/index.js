import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import getCountries from '../../../services/api';

import Container from './styles';

const Pagination = () => {
	const [pagesQuantity, setPagesQuantity] = useState(null);
	const pages = [1, 2, 3, 4, 5, 6];
	const currentPage = 1;

	useEffect(() => {
		async function getCountriesFromApi() {
			const countriesPerPage = 12;
			const { pagesQuantity: pgQuantity } = await getCountries(currentPage, countriesPerPage);

			setPagesQuantity(Math.ceil(pgQuantity / countriesPerPage));
		}
		getCountriesFromApi();
	}, []);

	return (
		<Container>
			<Link
				to={`?page=${currentPage - 1}`}
				style={currentPage === 1 ? { pointerEvents: 'none' } : {}}
			>
				prev
			</Link>

			{pages.map((page) => (
				<Link
					key={page}
					to={`?page=${page}`}
					active={`${page === currentPage}`}
				>
					{page}
				</Link>
			))}

			<Link
				to={`?page=${currentPage + 1}`}
				disabled={currentPage === pagesQuantity ? { pointerEvents: 'none' } : {}}
			>
				next
			</Link>
		</Container>
	);
};

export default Pagination;
