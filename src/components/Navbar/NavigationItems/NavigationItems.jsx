import React from 'react';
import styled, { css } from 'styled-components';
import * as routes from '../../../static/routes';
import NavigationItem from './NavigationItem/NavigationItem';
import NavIcon from '../../custom/NavIcon.component';
import iconTypes from '../../../static/iconTypes';

const NavContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	position: fixed;
	width: 100%;
	height: 100px;
	bottom: 0;
	background-color: lightgrey;
`;

const NavDiv = styled.div`
	text-align: center;

	&:hover {
		background-color: #b9cac9;
	}
`;

const NavHeader = styled.header`
	font-size: 1.5rem;
	color: #41b3a3;

	${props =>
		props.active &&
		css`
			color: #a55911;
		`}
`;

const NavigationItems = props => (
	<NavContainer>
		<NavigationItem link={routes.categories}>
			<NavDiv>
				<NavIcon
					iconName={iconTypes.categories}
					active={props.pathname === routes.categories}
				/>
				<NavHeader active={props.pathname === routes.categories}>
					{iconTypes.categories}
				</NavHeader>
			</NavDiv>
		</NavigationItem>
		<NavigationItem link={routes.locations}>
			<NavDiv>
				<NavIcon
					iconName={iconTypes.locations}
					active={props.pathname === routes.locations}
				/>
				<NavHeader active={props.pathname === routes.locations}>
					{iconTypes.locations}
				</NavHeader>
			</NavDiv>
		</NavigationItem>
	</NavContainer>
);

export default NavigationItems;
