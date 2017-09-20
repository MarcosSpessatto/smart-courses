import * as modalityTypes from './ModalityActionTypes';

const INITIAL_STATE = { modality: { type: '' }, modalities: [], modalityLength: 0 };

export default (state = INITIAL_STATE, action) => {
    if (action.type === modalityTypes.SAVE_MODALITY) {
        return { ...state, modality: action.payload };
    }
    else if (action.type === modalityTypes.GET_MODALITIES) {
        return { ...state, modalities: action.payload, modalityLength: action.payload.length };
    }
    else if (action.type === modalityTypes.REMOVE_MODALITY) {
        return { ...state };
    }
    else if (action.type === modalityTypes.CHANGE_VALUE_MODALITY) {
        return { ...state, modality: { type: action.payload.value } };
    }
    else if (action.type === modalityTypes.CLEAR_MODALITY) {
        return { ...state, modality: {} };
    }

    return state;
}