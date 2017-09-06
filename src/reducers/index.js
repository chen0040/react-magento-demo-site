import {combineReducers} from 'redux';
import rootCategory, {categoryProducts} from './categoryReducer';

const rootReducer = combineReducers({
    rootCategory,
    categoryProducts
});

export default rootReducer;