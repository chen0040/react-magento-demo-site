import * as types from './actionTypes';

export function createCategory(category) {
    return { type: types.CREATE_CATEGORY, category };
}