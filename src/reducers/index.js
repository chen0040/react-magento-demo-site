import {combineReducers} from 'redux';
import rootCategory, {categoryProducts} from './categoryReducer';
import products from './productReducer';

const rootReducer = combineReducers({
    rootCategory,
    categoryProducts,
    products
});

export default rootReducer;