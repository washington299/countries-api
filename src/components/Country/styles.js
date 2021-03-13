import styled from "styled-components";

export default styled.article`
	height: auto;
	background-color: ${props => props.theme.element};
	border-radius: 5px;
	box-shadow: 0px 0px 10px ${props => props.theme.shadow};
`;

export const Flag = styled.img`
	width: 100%;
	height: 180px;
	border: none;
	border-radius: 5px;
	outline: none;
`;

export const InfoBox = styled.div`
	padding: 25px;
`;

export const Name = styled.h2`
	font-size: 22px;
	font-weight: var(--font-weight-extra-bold);
`;

export const InfoArea = styled.div`
	padding: 15px 0;

	p {
		margin: 5px 0;
	}
`;

export const Subject = styled.strong`
	font-size: var(--font-size-default);
`;

export const Text = styled.span`
	font-size: var(--font-size-default);
`;
