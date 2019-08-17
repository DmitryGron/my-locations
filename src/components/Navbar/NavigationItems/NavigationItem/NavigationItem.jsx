import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled.div`
	font-family: sans-serif;
	font-size: 2rem;
`;

const NavigationItem = props => (
	<Link>
		<NavLink exact to={props.link} activeClassName={'active'}>
			{props.children}
		</NavLink>
	</Link>
);

export default NavigationItem;
