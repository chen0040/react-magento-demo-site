import * as actionTypes from '../actions/actionTypes';
import initialStates from './initialStates';

export default function products(state = initialStates.products, action) {
    switch(action.type) {
        case actionTypes.LOAD_PRODUCT_SUCCESS:
            let product = action.product;
            let newState = Object.assign({}, state);
            newState[product.sku] = product;
            console.log(newState);
            return newState;
        default:
            return state;
    }
}