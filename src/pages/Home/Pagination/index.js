import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import getCountries from "../../../services/api";

import Container from "./styles";

const Pagination = ({ setCountries }) => {
	const [pagesQuantity, setPagesQuantity] = useState(null);
	const [offset, setOffset] = useState(0);
	const countriesPerPage = 12;

	useEffect(() => {
		async function getCountriesFromApi() {
			setCountries([]);
			const { res: countries, countriesQuantity } = await getCountries(offset, countriesPerPage);

			setCountries(countries);
			setPagesQuantity(Math.ceil(countriesQuantity / countriesPerPage));
		}

		getCountriesFromApi();
	}, [offset]);

	const handlePageChange = async data => {
		const { selected } = data;
		setOffset(Math.ceil(selected * countriesPerPage));
	};

	return (
		<Container>
			<ReactPaginate
				pageCount={pagesQuantity}
				initialPage={offset}
				previousLabel="prev"
				nextLabel="next"
				marginPagesDisplayed={1}
				pageRangeDisplayed={3}
				onPageChange={handlePageChange}
				containerClassName="container"
				pageClassName="page"
				pageLinkClassName="pageLink"
				activeClassName="active"
				activeLinkClassName="activeLink"
				previousClassName="previous"
				nextClassName="next"
				previousLinkClassName="previousLink"
				nextLinkClassName="nextLink"
				disabledClassName="disabled"
			/>
		</Container>
	);
};

export default Pagination;
