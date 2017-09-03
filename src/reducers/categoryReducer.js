import * as actionTypes from '../actions/actionTypes';

export default function categoryReducer(state = [], action) {
    switch(action.type) {
        case actionTypes.CREATE_CATEGORY:
            return [...state,
                Object.assign({}, action.category)
            ];
        default:
            return state;
    }
}