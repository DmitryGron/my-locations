import React from 'react';
import { connect } from 'react-redux';
import * as categoriesActions from '../../store/actions/categories.actions';

const Toolbar = props => {
	return (
		<div>
			<header>TEST</header>
			<button
				onClick={() => {
					props.addCategory(props.categoryName);
				}}
			>
				Add
			</button>
			<button
				onClick={() => {
					props.updateCategory(props.categoryName, 'UPDATEDTEST');
				}}
			>
				Update
			</button>
			<button
				onClick={() => {
					props.removeCategory(props.categoryName);
				}}
			>
				Remove
			</button>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		categoryName: state.categories.categoryName
	};
};

const mapDispatchToProps = dispatch => {
	return {
		addCategory: categoryName =>
			dispatch(categoriesActions.addCategory(categoryName)),
		updateCategory: (categoryName, newCategoryName) =>
			dispatch(
				categoriesActions.updateCategory(categoryName, newCategoryName)
			),
		removeCategory: categoryName =>
			dispatch(categoriesActions.removeCategory(categoryName))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Toolbar);
