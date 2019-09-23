import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
	font-size: 24px;
	padding: 10px;
	margin-bottom: 30px;
	color: #a55911;
	text-align: center;
`;

const CustomHeader = props => {
	return <StyledHeader>{props.children}</StyledHeader>;
};

export default CustomHeader;
