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

	.disabled {
		pointer-events: none;
	}
	.container {
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.previous,
	.next,
	.break,
	.page {
		display: flex;
		border: 1px solid ${props => props.theme.activeBackground};
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
	.pageLink,
	.previousLink,
	.break,
	.nextLink {
		outline: none;
		padding: 6px 12px;
	}
`;
