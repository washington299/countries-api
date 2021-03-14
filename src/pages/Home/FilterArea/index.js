import React, { useState } from "react";
import { Search, ExpandMore } from "@material-ui/icons";

import Container, {
	Input,
	Option,
	OptionsBox,
	RegionDefaultText,
	RegionField,
	SearchField,
	Select,
} from "./styles";

const FilterArea = () => {
	const [inputText, setInputText] = useState("");
	const [hide, setHide] = useState(true);
	const [selectText, setSelectText] = useState("Filter by Region");

	function handleClick() {
		setHide(!hide);
	}

	function changeOption(e) {
		handleClick();
		setSelectText(e.target.innerHTML);
	}

	function handleInputChange(e) {
		setInputText(e.target.value);
	}

	return (
		<Container>
			<SearchField>
				<Search />
				<Input value={inputText} onChange={handleInputChange} />
			</SearchField>
			<RegionField>
				<Select onClick={handleClick}>
					<RegionDefaultText>{selectText}</RegionDefaultText>
					<ExpandMore />
				</Select>
				{!hide && (
					<OptionsBox>
						<Option style={{ marginBottom: 10 }} onClick={changeOption}>
							Filter by Region
						</Option>
						<Option onClick={changeOption}>Africa</Option>
						<Option onClick={changeOption}>America</Option>
						<Option onClick={changeOption}>Asia</Option>
						<Option onClick={changeOption}>Europe</Option>
						<Option onClick={changeOption}>Oceania</Option>
					</OptionsBox>
				)}
			</RegionField>
		</Container>
	);
};

export default FilterArea;
