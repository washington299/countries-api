import React from "react";

import Country from "../../../components/Country";

import Container from "./styles";

const Content = ({ countriesPaginated, countriesFiltered }) => (
	<>
		<Container>
			{countriesFiltered.length > 0
				? countriesFiltered.map(country => (
						<Country
							key={country.name}
							flag={country.flag}
							name={country.name}
							population={country.population}
							region={country.region}
							capital={country.capital}
						/>
				  ))
				: countriesPaginated.map(country => (
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
