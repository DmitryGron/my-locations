import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import MapIcon from '@material-ui/icons/Map';
import React from 'react';
import styled, { css } from 'styled-components';
import iconTypes from '../../static/iconTypes';

const CategoriesIconStyle = styled(FormatListBulletedIcon)`
	color: #41b3a3;
	font-size: 3rem !important;

	&:hover {
		font-size: 3.5rem !important;
		transition: all 0.2s ease-in-out;
	}

	${props =>
		props.active &&
		css`
			color: #a55911;
		`}
`;

const LocationsIconStyle = styled(MapIcon)`
	color: #41b3a3;
	font-size: 3rem !important;

	&:hover {
		font-size: 3.5rem !important;
		transition: all 0.2s ease-in-out;
	}

	${props =>
		props.active &&
		css`
			color: #a55911;
		`}
`;

const NavIcon = props => {
	return props.iconName === iconTypes.categories ? (
		<CategoriesIconStyle active={props.active} />
	) : (
		<LocationsIconStyle active={props.active} />
	);
};

export default NavIcon;
