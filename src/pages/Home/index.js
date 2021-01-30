import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import FilterArea from './FilterArea';
import Content from './Content';
import Pagination from './Pagination';

import Container from './styles';

const useQuery = () => new URLSearchParams(useLocation().search);

const Home = () => {
	const query = useQuery();
	const currentPage = parseInt(query.get('page'));

	useEffect(() => window.scrollTo(0, 0), [currentPage]);

	return (
		<Container>
			<FilterArea />
			<Content currentPage={currentPage} />
			<Pagination currentPage={currentPage} />
		</Container>
	);
};

export default Home;
