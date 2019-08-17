import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import * as routes from '../../../static/routes';

const NavigationItems = props => (
	<ul>
		<NavigationItem link={routes.categories}>Categories</NavigationItem>
		<NavigationItem link={routes.locations}>Locations</NavigationItem>
	</ul>
);

export default NavigationItems;
