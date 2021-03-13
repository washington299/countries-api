import styled from "styled-components";

export default styled.div.attrs(() => ({
	className: "wrapper",
}))`
	margin: 30px 0;
	display: flex;
	justify-content: center;

	ul {
		display: flex;
	}

	.active {
		color: ${props => props.theme.background};
		background-color: ${props => props.theme.activeBackground};
		font-weight: var(--font-weight-extra-bold);
	}

	.pageLink,
	.previousLink,
	.nextLink {
		border: 1px solid #aaa;
		font-size: 12px;
		text-decoration: none;
		cursor: pointer;

		:hover {
			color: ${props => props.theme.background};
			background-color: ${props => props.theme.activeBackground};
			font-weight: var(--font-weight-extra-bold);
			border: none;
		}
	}
`;
