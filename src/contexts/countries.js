import React, { createContext, useEffect, useState } from "react";

import { getAllCountries } from "../services/api";

export const CountriesContext = createContext([]);

const CountriesProvider = ({ children }) => {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		getAllCountries()
			.then(res => setCountries(res.data))
			.catch(error => console.error(error));
	}, []);

	return (
		<CountriesContext.Provider value={{ countries, setCountries }}>
			{children}
		</CountriesContext.Provider>
	);
};

export default CountriesProvider;
