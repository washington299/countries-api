import React, { useEffect, useContext, useState } from "react";

import { CountriesContext } from "../../contexts/countries";

import FilterArea from "./FilterArea";
import Content from "./Content";
import Pagination from "./Pagination";

import Container from "./styles";

const Home = () => {
	const { countries } = useContext(CountriesContext);

	const [countriesPaginated, setCountriesPaginated] = useState([]);

	useEffect(() => window.scrollTo(0, 0), []);

	return (
		<Container>
			<FilterArea />
			<Content countriesPaginated={countriesPaginated} />
			<Pagination countries={countries} setCountriesPaginated={setCountriesPaginated} />
		</Container>
	);
};

export default Home;
