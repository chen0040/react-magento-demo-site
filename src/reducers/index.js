import {combineReducers} from 'redux';
import categories from './categoryReducer';

const rootReducer = combineReducers({
    categories
});

export default rootReducer;