import * as actionTypes from './actionTypes';

export const addCategory = categoryName => {
	return {
		type: actionTypes.ADD_CATEGORY,
		categoryName: categoryName
	};
};

export const updateCategory = (categoryId, newCategoryName) => {
	return {
		type: actionTypes.UPDATE_CATEGORY,
		categoryId: categoryId,
		newCategoryName: newCategoryName
	};
};

export const removeCategory = categoryId => {
	return {
		type: actionTypes.REMOVE_CATEGORY,
		categoryId: categoryId
	};
};

export const fetchCategories = () => {
	return {
		type: actionTypes.FETCH_CATEGORIES
	};
};
