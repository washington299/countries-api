import React from "react";

// import getCountries from '../../../services/api';

import Country from "../../../components/Country";

import Container from "./styles";

const Content = ({ countries }) => (
	<>
		{/* {loading && <Loading>Loading...</Loading>} */}
		<Container>
			{countries.map(country => (
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

export default Content;
