import * as actionTypes from '../actions/actionTypes';

export default function categoryReducer(state = [], action) {
    switch(action.type) {
        case actionTypes.LOAD_ROOT_CATEGORY_SUCCESS:
            return action.rootCategory;
        default:
            return state;
    }
}