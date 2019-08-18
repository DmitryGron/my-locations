import DeleteIcon from '@material-ui/icons/Delete';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import React from 'react';
import styled from 'styled-components';
import iconTypes from '../../static/iconTypes';

const DeleteIconStyle = styled(DeleteIcon)`
	color: #60544e;
	cursor: pointer;
`;

const EditIconStyle = styled(EditSharpIcon)`
	color: #60544e;
	cursor: pointer;
	margin: 0px 20px !important;
`;

const CustomIcon = iconName => {
	return iconName.iconName === iconTypes.delete ? (
		<DeleteIconStyle />
	) : (
		<EditIconStyle />
	);
};

export default CustomIcon;
