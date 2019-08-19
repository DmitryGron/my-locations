import Modal from '@material-ui/core/Modal';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CustomTable from '../../components/custom/Table.component';
import LocationsModalForm from '../../components/Modals/LocationsModal.component';
import StyledModalBody from '../../components/Modals/StyledModalBody';
import * as locationsActions from '../../store/actions/locations.actions';

const Locations = props => {
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
						<LocationsModalForm
							onClick={inputValue => {
								props.updateCategory(categoryId, inputValue);
								handleClose();
							}}
							header={'please enter the new location details'}
							buttonText='Update'
						/>
					}
				</StyledModalBody>
			</Modal>

			<CustomTable
				itemsToShow={props.categories}
				title={'All Locations'}
				onRemove={props.removeCategory}
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
		removeLocation: locationName => {
			dispatch(locationsActions.updateLocation(locationName));
		},
		updateLocation: (locationId, newValue) =>
			dispatch(locationsActions.updateLocation(locationId, newValue)),
		fetchLocations: () => dispatch(locationsActions.fetchLocations())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Locations);
