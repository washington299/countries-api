import React, { useEffect, useState } from "react";

import FilterArea from "./FilterArea";
import Content from "./Content";
import Pagination from "./Pagination";

import Container from "./styles";

const Home = () => {
	const [countriesPaginated, setCountriesPaginated] = useState([]);
	const [countriesFiltered, setCountriesFiltered] = useState([]);

	useEffect(() => window.scrollTo(0, 0), []);

	return (
		<Container>
			<FilterArea setCountriesFiltered={setCountriesFiltered} />
			<Content countriesPaginated={countriesPaginated} countriesFiltered={countriesFiltered} />
			<Pagination setCountriesPaginated={setCountriesPaginated} />
		</Container>
	);
};

export default Home;
