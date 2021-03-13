import React, { useState, useEffect } from "react";
// import { useLocation } from 'react-router-dom';

import FilterArea from "./FilterArea";
import Content from "./Content";
import Pagination from "./Pagination";

import Container from "./styles";

// const useQuery = () => new URLSearchParams(useLocation().search);

const Home = () => {
	const [countries, setCountries] = useState([]);
	// const query = useQuery();

	useEffect(() => window.scrollTo(0, 0), []);

	return (
		<Container>
			<FilterArea />
			<Content countries={countries} />
			<Pagination setCountries={setCountries} />
		</Container>
	);
};

export default Home;
