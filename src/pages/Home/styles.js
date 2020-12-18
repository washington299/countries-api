import styled, { css } from 'styled-components';

export default styled.section.attrs(() => ({
	className: 'wrapper',
}))``;

export const PaginationArea = styled.div.attrs(() => ({
	className: 'wrapper',
}))`
	margin: 30px 0;
	display: flex;
	justify-content: center;
`;

export const PageNumber = styled.a`
	${(props) => props.active && css`
		color: ${() => props.theme.background} !important;
		background-color: ${() => props.theme.activeBackground} !important;
		font-weight: var(--font-weight-extra-bold);
	`}

	padding: 6px 12px;
	font-size: 12px;
	color: ${(props) => props.theme.text};
	background-color: ${(props) => props.theme.background};
	border: 1px solid #AAA;
	text-decoration: none;
	cursor: pointer;

	:hover {
		color: ${(props) => props.theme.background};
		background-color: ${(props) => props.theme.activeBackground};
		font-weight: var(--font-weight-extra-bold);
		border: none;
	}
`;
