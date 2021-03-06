import styled from "styled-components";

export default styled.div`
	display: flex;
	align-items: center;
	font-size: var(--font-size-small);
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
	svg {
		margin-right: 5px;
	}
	span {
		font-weight: var(--font-weight-semi-bold);
	}
`;
