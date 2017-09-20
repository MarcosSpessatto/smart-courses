import * as types from './AreaActionTypes';

const INITIAL_STATE = { area: { name: '' }, areas: [], areaLength: 0 };

export default (state = INITIAL_STATE, action) => {
    if (action.type === types.SAVE_AREA) {
        return { ...state, area: action.payload };
    }
    else if (action.type === types.GET_AREAS) {
        return { ...state, areas: action.payload, areaLength: action.payload.length };
    }
    else if (action.type === types.REMOVE_AREA) {
        return { ...state };
    }
    else if (action.type === types.CHANGE_VALUE_AREA) {
        return { ...state, area: { name: action.payload.value } };
    }
    else if (action.type === types.CLEAR_AREA) {
        return { ...state, area: {} };
    }

    return state;
}