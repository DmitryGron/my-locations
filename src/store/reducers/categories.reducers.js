import { updateObject } from '../../shared/utility';
import * as actionTypes from '../actions/actionTypes';

// TODO: check if need more state(loading,etc...)
const initialState = {
	categories: [], // [{name,id}]
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
	localStorage.setItem('categories', JSON.stringify(updatedState));
	return updateObject(state, updatedState);
};

const updateCategory = (state, action) => {
	const updatedCategoriesArray = [...state.categories];
	let categoryindex = -1;
	const category = updatedCategoriesArray.find((category, index) => {
		if (category.id === action.categoryId) {
			categoryindex = index;
			return true;
		}
		return false;
	});
	if (categoryindex !== -1) {
		const updatedCategory = updateObject(category, {
			name: action.newCategoryName
		});
		updatedCategoriesArray[categoryindex] = updatedCategory;
		const updatedState = { categories: updatedCategoriesArray };
		localStorage.setItem('categories', JSON.stringify(updatedState));
		return updateObject(state, updatedState);
	}
	return state;
};

const removeCategory = (state, action) => {
	const oldCategoriesArray = [...state.categories];
	const updatedCategoriesArray = oldCategoriesArray.filter(category => {
		return category.id !== action.categoryId;
	});
	const updatedState = { categories: updatedCategoriesArray };
	localStorage.setItem('categories', JSON.stringify(updatedState));
	return updateObject(state, updatedState);
};

const fetchCategories = (state, action) => {
	const obj = JSON.parse(localStorage.getItem('categories'));
	return updateObject(state, obj);
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_CATEGORY:
			return addCategory(state, action);
		case actionTypes.UPDATE_CATEGORY:
			return updateCategory(state, action);
		case actionTypes.REMOVE_CATEGORY:
			return removeCategory(state, action);
		case actionTypes.FETCH_CATEGORIES:
			return fetchCategories(state, action);
		default:
			return state;
	}
};

export default reducer;
