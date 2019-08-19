import Modal from '@material-ui/core/Modal';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CustomTable from '../../components/custom/Table.component';
import LocationsModalForm from '../../components/Modals/LocationsModal.component';
import StyledModalBody from '../../components/Modals/StyledModalBody';
import { fetchCategories } from '../../store/actions/categories.actions';
import {
	fetchLocations,
	removeLocation,
	updateLocation
} from '../../store/actions/locations.actions';

const Locations = ({
	fetchLocations,
	updateLocation,
	locations,
	removeLocation,
	categories,
	fetchCategories,
	alphabetically,
	grouped,
	categoryFilterIds
}) => {
	const [open, setOpen] = useState(false);
	const [locationId, setLocationId] = useState(-1);

	useEffect(() => {
		fetchLocations();
		fetchCategories();
	}, [fetchLocations, fetchCategories]);

	const handleOpen = locationId => {
		setOpen(true);
		setLocationId(locationId);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const getFilteredLocations = () => {
		let filteredLocations = [...locations];
		if (alphabetically) {
			filteredLocations = filteredLocations.sort(
				(locationA, locationB) => {
					if (locationA.name < locationB.name) {
						return -1;
					}
					if (locationA.name > locationB.name) {
						return 1;
					}
					return 0;
				}
			);
		}
		if (grouped) {
			// filteredLocations = _.groupBy(filteredLocations.categories);
		}
		if (categoryFilterIds.length > 0) {
			console.log(categoryFilterIds);
			categoryFilterIds.forEach(categoryFilterId => {
				filteredLocations = filteredLocations.filter(location => {
					return location.categories.includes(categoryFilterId);
				});
			});
			console.log(filteredLocations);
		}
		return filteredLocations;
	};

	return (
		<div>
			<Modal open={open} onClose={handleClose}>
				<StyledModalBody>
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
						categories={categories}
					/>
				</StyledModalBody>
			</Modal>

			<CustomTable
				itemsToShow={getFilteredLocations()}
				title={'All Locations'}
				onRemove={removeLocation}
				onUpdate={handleOpen}
			/>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		...state.locations,
		...state.categories,
		grouped: state.locations.grouped,
		alphabetically: state.locations.alphabetically,
		categoryFilterIds: state.locations.categoryFilterIds
	};
};

const mapDispatchToProps = dispatch => {
	return {
		removeLocation: locationId => {
			dispatch(removeLocation(locationId));
		},
		updateLocation: (locationId, newValue) =>
			dispatch(updateLocation(locationId, newValue)),
		fetchLocations: () => dispatch(fetchLocations()),
		fetchCategories: () => dispatch(fetchCategories())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Locations);
