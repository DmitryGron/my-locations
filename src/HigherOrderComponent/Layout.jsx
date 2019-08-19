import Modal from '@material-ui/core/Modal';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import CategoriesModalForm from '../components/Modals/CategoryModal.component';
import LocationsModalForm from '../components/Modals/LocationsModal.component';
import StyledModalBody from '../components/Modals/StyledModalBody';
import Navbar from '../components/Navbar/Navbar.component';
import Toolbar from '../containers/Toolbar/Toolbar.container';
import * as routes from '../static/routes';
import { addCategory } from '../store/actions/categories.actions';
import {
	addLocation,
	setAlphabeticallySort,
	setCategoryFilter,
	setGroupedSort
} from '../store/actions/locations.actions';

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
		buttons: [
			{
				buttonText: 'Add',
				onClick: handleOpen
			}
		]
	};
	const locationsPageProps = {
		title: 'Locations',
		buttons: [
			{
				buttonText: 'Filter By Category',
				categoryFilterIds: props.categoryFilterIds,
				setCategoryFilter: props.setNewCategoryFilter,
				categories: props.categories
			},
			{
				buttonText: props.grouped ? 'UnGroup' : 'Group',
				onClick: props.setGroupedSort
			},
			{
				buttonText: props.alphabetically
					? 'Unsort Alphabetically'
					: 'Sort Alphabetically',
				onClick: props.setAlphabeticallySort
			},
			{
				buttonText: 'Add',
				onClick: handleOpen
			}
		]
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
				locationObject={{ categories: [] }}
				categories={props.categories}
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

const mapStateToProps = state => {
	return {
		...state.categories,
		grouped: state.locations.grouped,
		alphabetically: state.locations.alphabetically,
		categoryFilterIds: state.locations.categoryFilterIds
	};
};

const mapDispatchToProps = dispatch => {
	return {
		addCategory: categoryName => dispatch(addCategory(categoryName)),
		addLocation: locationObject => {
			dispatch(addLocation(locationObject));
		},
		setGroupedSort: () => {
			dispatch(setGroupedSort());
		},
		setAlphabeticallySort: () => {
			dispatch(setAlphabeticallySort());
		},
		setNewCategoryFilter: categoryFilterIds => {
			dispatch(setCategoryFilter(categoryFilterIds));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(Layout));
