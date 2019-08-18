import { updateObject } from '../../shared/utility';
import * as actionTypes from '../actions/actionTypes';

// TODO: check if need more state(loading,etc...)
const initialState = {
	categories: [],
	counter: 0
};

const addCategory = (state, action) => {
	const updatedCategoriesArray = [...state.categories];
	if (action.categoryName) {
		updatedCategoriesArray.push({
			id: state.counter,
			name: action.categoryName
		});
	}
	const updatedState = {
		categories: updatedCategoriesArray,
		counter: state.counter + 1
	};
	return updateObject(state, updatedState);
};

const updateCategory = (state, action) => {
	const updatedCategoriesArray = [...state.categories];
	const categoryIndex = updatedCategoriesArray.findIndex(categoryName => {
		return categoryName === action.categoryName;
	});
	updatedCategoriesArray[categoryIndex] = action.newCategoryName;
	const updatedState = { categories: updatedCategoriesArray };
	return updateObject(state, updatedState);
};

const removeCategory = (state, action) => {
	const oldCategoriesArray = [...state.categories];
	const updatedCategoriesArray = oldCategoriesArray.filter(category => {
		return category.id !== action.categoryId;
	});
	const updatedState = { categories: updatedCategoriesArray };
	return updateObject(state, updatedState);
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_CATEGORY:
			return addCategory(state, action);
		case actionTypes.UPDATE_CATEGORY:
			return updateCategory(state, action);
		case actionTypes.REMOVE_CATEGORY:
			return removeCategory(state, action);
		default:
			return state;
	}
};

export default reducer;
