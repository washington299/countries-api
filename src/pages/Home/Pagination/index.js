import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import getCountries from '../../../services/api';

import Container from './styles';

const Pagination = ({ currentPage }) => {
	const pages = [1, 2, 3, 4, 5, 6];
	let pagesQuantity = null;

	useEffect(() => {
		async function getCountriesFromApi() {
			const countriesPerPage = 12;
			const { pagesQuantity: pgQuantity } = await getCountries(currentPage, countriesPerPage);

			pagesQuantity = Math.ceil(pgQuantity / countriesPerPage);
		}
		getCountriesFromApi();
	}, [currentPage]);

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
