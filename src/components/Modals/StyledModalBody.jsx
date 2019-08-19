import React from 'react';
import styled from 'styled-components';

const StyledModalDiv = styled.div`
	position: absolute;
	width: 400px;
	height: 400px;
	top: 50%;
	left: 50%;
	background-color: white;
	border: 2px solid #000;
	padding: 10px;
	transform: translate(-50%, -50%);
`;

const StyledModalBody = props => (
	<StyledModalDiv>{props.children}</StyledModalDiv>
);

export default StyledModalBody;
