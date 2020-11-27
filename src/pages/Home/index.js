import React from 'react';
import { Search } from '@material-ui/icons';

import Container, {
	Filters, SearchField, RegionField, Input,
} from './styles';

class Home extends React.Component {
	render() {
		return (
			<Container>
				<Filters>
					<SearchField>
						<Search />
						<Input />
					</SearchField>
					<RegionField>Region</RegionField>
				</Filters>
			</Container>
		);
	}
}

export default Home;
