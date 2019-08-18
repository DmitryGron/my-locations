import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as categoriesActions from '../store/actions/categories.actions';
import Navbar from '../components/Navbar/Navbar.container';
import Toolbar from '../containers/Toolbar/Toolbar.container';
import * as routes from '../static/routes';
import Modal from '@material-ui/core/Modal';
import styled from 'styled-components';
import CategoriesModalForm from '../components/Modals/CategoryModal.component';
import LocationsModalForm from '../components/Modals/LocationsModal.component';

const StyledModalBody = styled.div`
	position: absolute;
	width: 400px;
	height: 400px;
	top: 50%;
	left: 50%;
	background-color: white;
	border: 2px solid #000;
	padding: 10px;
	transform: translate(-50%, -50%);
`;

const Layout = props => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const categoriesPageProps = {
		title: 'Categories',
		handleOpen: handleOpen
	};
	const locationsPageProps = {
		title: 'Locations',
		handleOpen: handleOpen
	};
	const toolbarProps =
		props.location.pathname === routes.categories
			? { ...categoriesPageProps }
			: { ...locationsPageProps };

	const modalFormContent =
		props.location.pathname === routes.categories ? (
			<CategoriesModalForm
				onClick={inputValue => {
					props.addCategory(inputValue);
					handleClose();
				}}
			/>
		) : (
			<LocationsModalForm />
		);

	return (
		<>
			<Toolbar {...toolbarProps} />
			<Modal open={open} onClose={handleClose}>
				<StyledModalBody>{modalFormContent}</StyledModalBody>
			</Modal>
			<main>{props.children}</main>
			<Navbar />
		</>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		addCategory: categoryName =>
			dispatch(categoriesActions.addCategory(categoryName))
	};
};

export default connect(
	null,
	mapDispatchToProps
)(withRouter(Layout));
