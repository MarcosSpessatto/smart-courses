import * as types from './AreaActionTypes';
import Materialize from 'materialize-css';

const INITIAL_STATE = { area: { name: '' }, areas: [], quantityOfAreas: 0 };

export default (state = INITIAL_STATE, action) => {
    if (action.type === types.SAVE_AREA) {
        Materialize.toast(`Salvo com sucesso`, 4000);
        return { ...state, area: action.payload };
    }
    else if (action.type === types.GET_AREAS) {
        return { ...state, areas: action.payload, quantityOfAreas: action.payload.length };
    }
    else if (action.type === types.REMOVE_AREA) {
        Materialize.toast(`Excluído com sucesso`, 4000);
        return { ...state };
    }
    else if (action.type === types.CHANGE_VALUE) {
        return { ...state, area: { name: action.payload.value } };
    }
    else if (action.type === types.CLEAR) {
        return { ...state, area: {} };
    }

    return state;
}