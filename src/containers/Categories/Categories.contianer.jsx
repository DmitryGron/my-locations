import Modal from '@material-ui/core/Modal';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CustomTable from '../../components/custom/Table.component';
import CategoriesModalForm from '../../components/Modals/CategoryModal.component';
import * as categoriesActions from '../../store/actions/categories.actions';

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

const Categories = props => {
	const [open, setOpen] = useState(false);
	const [categoryId, setCategoryId] = useState(-1);

	useEffect(() => {
		props.fetchCategories();
	}, [props]);

	const handleOpen = categoryId => {
		setOpen(true);
		setCategoryId(categoryId);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Modal open={open} onClose={handleClose}>
				<StyledModalBody>
					{
						<CategoriesModalForm
							onClick={inputValue => {
								props.updateCategory(categoryId, inputValue);
								handleClose();
							}}
							header={'please enter the new category name'}
							buttonText='Update'
						/>
					}
				</StyledModalBody>
			</Modal>

			<CustomTable
				itemsToShow={props.categories}
				title={props.title}
				onRemove={props.removeCategory}
				onUpdate={handleOpen}
			/>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		...state.categories,
		title: 'All Categories'
	};
};

const mapDispatchToProps = dispatch => {
	return {
		removeCategory: categoryName => {
			dispatch(categoriesActions.removeCategory(categoryName));
		},
		updateCategory: (categoryId, newValue) =>
			dispatch(categoriesActions.updateCategory(categoryId, newValue)),
		fetchCategories: () => dispatch(categoriesActions.fetchCategories())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Categories);
