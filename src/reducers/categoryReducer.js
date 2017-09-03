export default function categoryReducer(state = [], action) {
    switch(action.type) {
        case 'CREATE_CATEGORY':
            return [...state,
                Object.assign({}, action.category)
            ];
        default:
            return state;
    }
}