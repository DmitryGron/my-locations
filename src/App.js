import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Categories from './containers/Categories/Categories.contianer';
import Layout from './HigherOrderComponent/Layout';

const Button = styled.button`
	background: transparent;
	border-radius: 3px;
	border: 2px solid palevioletred;
	color: palevioletred;
	margin: 0.5em 1em;
	padding: 0.25em 1em;

	${props =>
		props.primary &&
		css`
			background: palevioletred;
			color: white;
		`}
`;

const Container = styled.div`
	text-align: center;
`;

const Temp = () => {
	return (
		<Container>
			<Button>1111</Button>
			<Button primary>2222</Button>
		</Container>
	);
};

const App = () => {
	const routes = (
		<Switch>
			<Route path="/locations" exact component={Categories} />
			<Route path="/categories" exact component={Categories} />
			<Route path="/" exact component={Temp} />
			<Redirect to="/" />
		</Switch>
	);

	return (
		<div>
			<Layout>{routes}</Layout>
		</div>
	);
};

export default withRouter(App);
