import Modal from '@material-ui/core/Modal';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CustomTable from '../../components/custom/Table';
import LocationsModalForm from '../../components/Modals/LocationsModal';
import LocationsModalDetails from '../../components/Modals/LocationModalDetails';
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
	const [formModalOpen, setFormModalOpen] = useState(false);
	const [
		locationDetailsModalOpen,
		setLocationDetailsModalOpenOpen
	] = useState(false);
	const [locationId, setLocationId] = useState(-1);

	useEffect(() => {
		fetchLocations();
		fetchCategories();
	}, [fetchLocations, fetchCategories]);

	const handleFormOpen = locationId => {
		setFormModalOpen(true);
		setLocationId(locationId);
	};

	const handleFormClose = () => {
		setFormModalOpen(false);
	};

	const handleDetailsOpen = locationId => {
		setLocationDetailsModalOpenOpen(true);
		setLocationId(locationId);
	};

	const handleDetailsClose = () => {
		setLocationDetailsModalOpenOpen(false);
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
			const sumOfArray = (total, num) => {
				return total + num;
			};
			filteredLocations = filteredLocations.sort(
				(locationA, locationB) => {
					if (
						locationA.categories.reduce(sumOfArray) <
						locationB.categories.reduce(sumOfArray)
					) {
						return -1;
					}
					if (
						locationA.categories.reduce(sumOfArray) >
						locationB.categories.reduce(sumOfArray)
					) {
						return 1;
					}
					return 0;
				}
			);
		}
		if (categoryFilterIds.length > 0) {
			categoryFilterIds.forEach(categoryFilterId => {
				filteredLocations = filteredLocations.filter(location => {
					return location.categories.includes(categoryFilterId);
				});
			});
		}
		return filteredLocations;
	};

	return (
		<div>
			<Modal
				open={formModalOpen || locationDetailsModalOpen}
				onClose={() => {
					handleFormClose();
					handleDetailsClose();
				}}
			>
				<StyledModalBody>
					{locationDetailsModalOpen ? (
						<LocationsModalDetails
							locationObject={locations.find(location => {
								return location.id === locationId;
							})}
							categories={categories}
						/>
					) : (
						<LocationsModalForm
							onClick={newValue => {
								updateLocation(locationId, newValue);
								handleFormClose();
							}}
							locationObject={locations.find(location => {
								return location.id === locationId;
							})}
							header={'please enter the new location details'}
							buttonText='Update'
							categories={categories}
						/>
					)}
				</StyledModalBody>
			</Modal>
			<CustomTable
				itemsToShow={getFilteredLocations()}
				title={'All Locations'}
				onRemove={removeLocation}
				onUpdate={handleFormOpen}
				onItemClick={handleDetailsOpen}
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
