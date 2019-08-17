import React from 'react';
import { connect } from 'react-redux';
import CustomTable from '../../components/custom/Table.component';

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

export default connect(mapStateToProps)(Categories);
