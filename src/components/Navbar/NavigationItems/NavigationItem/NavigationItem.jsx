import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationItem = props => (
	<li>
		<NavLink exact to={props.link} activeClassName={'active'}>
			{props.children}
		</NavLink>
	</li>
);

export default NavigationItem;
