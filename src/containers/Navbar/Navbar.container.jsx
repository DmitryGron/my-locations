import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../components/Logo.container';

const Navbar = props => (
	<header>
		<div>
			<Logo />
		</div>
		<nav>
			<NavigationItems isAuthenticated={props.isAuthenticated} />
		</nav>
	</header>
);

export default Navbar;
