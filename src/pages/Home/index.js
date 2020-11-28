import React from 'react';
import { Search, ExpandMore } from '@material-ui/icons';

import Container, {
	Filters, SearchField, RegionField, Input, Select, RegionDefaultText, OptionsBox, Option,
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
					<RegionField>
						<Select>
							<RegionDefaultText>Filter by Region</RegionDefaultText>
							<ExpandMore />
						</Select>
						<OptionsBox>
							<Option>Africa</Option>
							<Option>America</Option>
							<Option>Asia</Option>
							<Option>Europe</Option>
							<Option>Oceania</Option>
						</OptionsBox>
					</RegionField>
				</Filters>
			</Container>
		);
	}
}

export default Home;
