import React from 'react';
import styled from 'styled-components';
import * as routes from '../../../static/routes';
import NavigationItem from './NavigationItem/NavigationItem';

const NavContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

const NavigationItems = props => (
	<NavContainer>
		<NavigationItem link={routes.categories}>Categories</NavigationItem>
		<NavigationItem link={routes.locations}>Locations</NavigationItem>
	</NavContainer>
);

export default NavigationItems;
