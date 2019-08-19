import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Categories from './containers/Categories/Categories.contianer';
import Locations from './containers/Locations/Locations.contianer';
import Layout from './HigherOrderComponent/Layout';
import * as routePaths from './static/routes';

const HomePageHeader = styled.header`
	font-size: 4rem;
	padding: 10px;
	margin: 50px;
	color: #a55911;
	text-align: center;
`;

const HomePage = () => {
	return <HomePageHeader>Welcome to my-locations</HomePageHeader>;
};

const App = () => {
	const routes = (
		<Switch>
			{/* TODO: CHANGE THIS */}
			<Route path={routePaths.locations} exact component={Locations} />
			<Route path={routePaths.categories} exact component={Categories} />
			<Route path={routePaths.home} exact component={HomePage} />
			<Redirect to={routePaths.home} />
		</Switch>
	);
	const GlobalStyle = createGlobalStyle`
		body {
			margin: 0;
			font-family: sans-serif;
		}
		a {
			text-decoration: none
		}
	  `;

	return (
		<div>
			<GlobalStyle />
			<Layout>{routes}</Layout>
		</div>
	);
};

export default withRouter(App);
