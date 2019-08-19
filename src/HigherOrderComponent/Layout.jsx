import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as categoriesActions from '../store/actions/categories.actions';
import Navbar from '../components/Navbar/Navbar.component';
import Toolbar from '../containers/Toolbar/Toolbar.container';
import * as routes from '../static/routes';
import Modal from '@material-ui/core/Modal';
import styled from 'styled-components';
import CategoriesModalForm from '../components/Modals/CategoryModal.component';
import LocationsModalForm from '../components/Modals/LocationsModal.component';
import StyledModalBody from '../components/Modals/StyledModalBody';

const NavbarFotterPhantomBlocker = styled.div`
	display: block;
	height: 100px;
	width: 100%;
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
				header={'please enter the category name you would like to add'}
				buttonText='Add'
			/>
		) : (
			<LocationsModalForm
				onClick={locationObject => {
					props.addLocation(locationObject);
					handleClose();
				}}
				header={
					'please enter the location details you would like to add'
				}
				buttonText='Add'
			/>
		);

	return (
		<>
			<Toolbar {...toolbarProps} />
			<Modal open={open} onClose={handleClose}>
				<StyledModalBody>{modalFormContent}</StyledModalBody>
			</Modal>
			<main>{props.children}</main>
			<NavbarFotterPhantomBlocker />
			<Navbar pathname={props.location.pathname} />
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
