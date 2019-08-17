import React from 'react';
import { connect } from 'react-redux';
import * as categoriesActions from '../../store/actions/categories.actions';

const Toolbar = props => {
	return (
		<div>
			<header>TEST</header>
			<button
				onClick={() => {
					props.addCategory('props.categoryName');
				}}
			>
				Add
			</button>
			<button
				onClick={() => {
					props.updateCategory(props.categoryName);
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

const mapDispatchToProps = dispatch => {
	return {
		addCategory: categoryName =>
			dispatch(categoriesActions.addCategory(categoryName)),
		updateCategory: categoryName =>
			dispatch(categoriesActions.addCategory(categoryName)),
		removeCategory: categoryName =>
			dispatch(categoriesActions.addCategory(categoryName))
	};
};

export default connect(
	null,
	mapDispatchToProps
)(Toolbar);
