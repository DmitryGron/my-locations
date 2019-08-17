import React from 'react';
import { connect } from 'react-redux';
import * as categoriesActions from '../../store/actions/categories.actions';
import CustomTable from '../../components/Table.component';

const Categories = props => {
	return (
		<div>
			<CustomTable {...props} />
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
		getCategories: () => dispatch(categoriesActions.getCategories())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Categories);
