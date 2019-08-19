import Modal from '@material-ui/core/Modal';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CustomTable from '../../components/custom/Table.component';
import CategoriesModalForm from '../../components/Modals/CategoryModal.component';
import StyledModalBody from '../../components/Modals/StyledModalBody';
import * as categoriesActions from '../../store/actions/categories.actions';

const Categories = ({
	fetchCategories,
	updateCategory,
	categories,
	removeCategory
}) => {
	const [open, setOpen] = useState(false);
	const [categoryId, setCategoryId] = useState(-1);

	useEffect(() => {
		fetchCategories();
	}, [fetchCategories]);

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
								updateCategory(categoryId, inputValue);
								handleClose();
							}}
							header={'please enter the new category name'}
							buttonText='Update'
						/>
					}
				</StyledModalBody>
			</Modal>

			<CustomTable
				itemsToShow={categories}
				title={'All Categories'}
				onRemove={removeCategory}
				onUpdate={handleOpen}
			/>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		...state.categories
	};
};

const mapDispatchToProps = dispatch => {
	return {
		removeCategory: categoryId => {
			dispatch(categoriesActions.removeCategory(categoryId));
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
