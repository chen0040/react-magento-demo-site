import * as types from './actionTypes';
import MagentoCategoryApi from '../api/MagentoCategoryApi';
import MagentoAccountInfo from '../api/MagentoAccountInfo';

export function loadRootCategorySuccess(rootCategory) {
    return {
        type: types.LOAD_ROOT_CATEGORY_SUCCESS,
        rootCategory 
    };
}

export function loadCategoryProductSuccess(categoryProducts) {
    return {
        type: types.LOAD_CATEGORY_PRODUCTS_SUCCESS,
        categoryProducts 
    };
}

export function loadRootCategory(token) {
    return function(dispatch) {
        return MagentoCategoryApi.loadRootCategory('', token).then(response => {
            dispatch(loadRootCategorySuccess(response.data));
        }).catch(error => {
            throw(error);
        });
    };
}

export function loadCategoryProducts(categoryId, token) {
    return function(dispatch) {
        return MagentoCategoryApi.loadProducts('', categoryId, token).then(response => {
            dispatch(loadCategoryProductSuccess(response.data));
        }).catch(error => {
            throw(error); 
        });
    };
}