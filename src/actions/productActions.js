import * as types from './actionTypes';
import MagentoProductApi from '../api/MagentoProductApi';
import MagentoAccountInfo from '../api/MagentoAccountInfo';

export function loadProductSuccess(product) {
    return {
        type: types.LOAD_PRODUCT_SUCCESS,
        product 
    };
}

export function loadProduct(sku, token) {
    return function(dispatch) {
        return MagentoProductApi.loadProduct('', sku, token).then(response => {
            dispatch(loadProductSuccess(response.data));
        }).catch(error => {
            throw(error); 
        });
    };
}