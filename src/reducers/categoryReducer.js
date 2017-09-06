import * as actionTypes from '../actions/actionTypes';
import initialStates from './initialStates';

export default function rootCategory(state = initialStates.rootCategory, action) {
    switch(action.type) {
        case actionTypes.LOAD_ROOT_CATEGORY_SUCCESS:
            return action.rootCategory;
        default:
            return state;
    }
}

export function categoryProducts(state = initialStates.categoryProducts, action) {
    switch(action.type) {
        case actionTypes.LOAD_CATEGORY_PRODUCTS_SUCCESS:
            return action.categoryProducts;
        default:
            return state;
    }
}