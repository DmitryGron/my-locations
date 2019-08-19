import Modal from '@material-ui/core/Modal';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CustomTable from '../../components/custom/Table.component';
import LocationsModalForm from '../../components/Modals/LocationsModal.component';
import StyledModalBody from '../../components/Modals/StyledModalBody';
import * as locationsActions from '../../store/actions/locations.actions';

const Locations = ({
	fetchLocations,
	updateLocation,
	locations,
	removeLocation
}) => {
	const [open, setOpen] = useState(false);
	const [locationId, setLocationId] = useState(-1);

	useEffect(() => {
		fetchLocations();
	}, [fetchLocations]);

	const handleOpen = locationId => {
		setOpen(true);
		setLocationId(locationId);
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
							onClick={newValue => {
								updateLocation(locationId, newValue);
								handleClose();
							}}
							locationObject={locations.find(location => {
								return location.id === locationId;
							})}
							header={'please enter the new location details'}
							buttonText='Update'
						/>
					}
				</StyledModalBody>
			</Modal>

			<CustomTable
				itemsToShow={locations}
				title={'All Locations'}
				onRemove={removeLocation}
				onUpdate={handleOpen}
			/>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		...state.locations
	};
};

const mapDispatchToProps = dispatch => {
	return {
		removeLocation: locationId => {
			dispatch(locationsActions.removeLocation(locationId));
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
