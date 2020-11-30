import React from 'react';
import { Search, ExpandMore } from '@material-ui/icons';

import getAllCountries from '../../services/api';

import Country from '../../components/Country';

import Container, {
	Filters,
	SearchField,
	RegionField,
	Input,
	Select,
	RegionDefaultText,
	OptionsBox,
	Option,
	Main,
} from './styles';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hide: true,
			text: 'Filter by Region',
			countries: [],
		};
		this.handleClick = this.handleClick.bind(this);
		this.changeOption = this.changeOption.bind(this);
	}

	async componentDidMount() {
		const res = await getAllCountries('all');
		this.setState({ countries: res.data });
	}

	handleClick() {
		this.setState((state) => ({
			hide: !state.hide,
		}));
	}

	changeOption(e) {
		this.handleClick();
		this.setState({ text: e.target.innerHTML });
	}

	render() {
		return (
			<Container>
				<Filters>
					<SearchField>
						<Search />
						<Input />
					</SearchField>
					<RegionField>
						<Select onClick={this.handleClick}>
							<RegionDefaultText>{this.state.text}</RegionDefaultText>
							<ExpandMore />
						</Select>
						{!this.state.hide && (
							<OptionsBox>
								<Option
									style={{ marginBottom: 10 }}
									onClick={this.changeOption}
								>
									Filter by Region
								</Option>
								<Option onClick={this.changeOption}>Africa</Option>
								<Option onClick={this.changeOption}>America</Option>
								<Option onClick={this.changeOption}>Asia</Option>
								<Option onClick={this.changeOption}>Europe</Option>
								<Option onClick={this.changeOption}>Oceania</Option>
							</OptionsBox>
						)}
					</RegionField>
				</Filters>
				<Main>
					{this.state.countries.map((country) => (
						<Country
							key={country.name}
							flag={country.flag}
							name={country.name}
							population={country.population}
							region={country.region}
							capital={country.capital}
						/>
					))}
				</Main>
			</Container>
		);
	}
}

export default Home;
