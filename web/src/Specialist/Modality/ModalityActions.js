import * as ModalityApi from './ModalityApi';
import * as modalityTypes from './ModalityActionTypes';
import * as dialogTypes from '../../Common/Dialog/DialogActionTypes';

export const saveModality = (modality) => {
    return dispatch => {
        ModalityApi
            .saveModality(modality)
            .then(modalitySaved => dispatch({ type: modalityTypes.SAVE_MODALITY, payload: modalitySaved }))
            .then(() => dispatch(getModalities()))
            .then(() => dispatch(clear()))
            .then(() => dispatch({type: dialogTypes.SHOW_SUCCESS}))
            .catch((err) => dispatch({ type:  dialogTypes.SHOW_ERROR }));
    }
}

export const getModalities = () => {
    return dispatch => {
        ModalityApi
            .getModalities()
            .then(modalities => dispatch({ type: modalityTypes.GET_MODALITIES, payload: modalities }))
            .catch((err) => dispatch({ type:  dialogTypes.SHOW_ERROR }));
    }
}

export const removeModality = (modalityId) => {
    return dispatch => {
        ModalityApi
            .removeModality(modalityId)
            .then(modalityId => dispatch({ type: modalityTypes.REMOVE_MODALITY, payload: modalityId }))
            .then(() => dispatch(getModalities()))
            .then(() => dispatch({type: dialogTypes.SHOW_DELETE_SUCCESS}))
            .catch((err) => dispatch({ type:  dialogTypes.SHOW_ERROR }));
    }
}

export const changeValue = (event) => {
    return dispatch => {
        dispatch({ type: modalityTypes.CHANGE_VALUE, payload: event.target });
    }
}

export const clear = () => {
    return dispatch => {
        dispatch({ type: modalityTypes.CLEAR });
    }
}