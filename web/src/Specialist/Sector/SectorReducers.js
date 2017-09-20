import * as types from './SectorActionTypes';

const INITIAL_STATE = { sector: { name: '', area: '' }, sectors: [], sectorLength: 0 };

export default (state = INITIAL_STATE, action) => {
    if (action.type === types.SAVE_SECTOR) {
        return { ...state, sector: action.payload };
    }
    else if (action.type === types.GET_SECTORS) {
        return { ...state, sectors: action.payload, sectorLength: action.payload.length };
    }
    else if (action.type === types.REMOVE_SECTOR) {
        return { ...state };
    }
    else if (action.type === types.CHANGE_VALUE_SECTOR) {
        return { ...state, sector: action.payload };
    }
    else if (action.type === types.CLEAR_SECTOR) {
        return { ...state, sector: {} };
    }

    return state;
}