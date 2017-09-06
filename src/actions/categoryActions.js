import * as types from './actionTypes';
import MagentoCategoryApi from '../api/MagentoCategoryApi';
import MagentoAccountInfo from '../api/MagentoAccountInfo';

export function loadRootCategorySuccess(rootCategory) {
    return {
        type: types.LOAD_ROOT_CATEGORY_SUCCESS,
        rootCategory 
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