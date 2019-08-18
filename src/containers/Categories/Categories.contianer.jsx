import React from 'react';
import { connect } from 'react-redux';
import CustomTable from '../../components/custom/Table.component';
import * as categoriesActions from '../../store/actions/categories.actions';

const Categories = props => {
	console.log(props);
	return (
		<div>
			<CustomTable
				itemsToShow={props.categories}
				title={props.title}
				onRemove={props.removeCategory}
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
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Categories);
