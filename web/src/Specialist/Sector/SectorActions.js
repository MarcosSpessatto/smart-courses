import * as SectorApi from './SectorApi';
import * as sectorTypes from './SectorActionTypes';
import * as dialogTypes from '../../Common/Dialog/DialogActionTypes';

export const saveSector = (sector) => {
    return dispatch => {
        SectorApi
            .saveSector(sector)
            .then(sectorSaved => dispatch({ type: sectorTypes.SAVE_SECTOR, payload: sectorSaved }))
            .then(() => dispatch(getSectors()))
            .then(() => dispatch(clear()))
            .then(() => dispatch({type: dialogTypes.SHOW_SUCCESS}))
            .catch((err) => dispatch({ type:  dialogTypes.SHOW_ERROR }));
    }
}

export const getSectors = () => {
    return dispatch => {
        SectorApi
            .getSectors()
            .then(areas => dispatch({ type: sectorTypes.GET_SECTORS, payload: areas }))
            .catch((err) => dispatch({ type:  dialogTypes.SHOW_ERROR }));
    }
}

export const removeSector = (sectorId) => {
    return dispatch => {
        SectorApi
            .removeSector(sectorId)
            .then(sectorId => dispatch({ type: sectorTypes.REMOVE_SECTOR, payload: sectorId }))
            .then(() => dispatch(getSectors()))
            .then(() => dispatch({type: dialogTypes.SHOW_DELETE_SUCCESS}))
            .catch((err) => dispatch({ type:  dialogTypes.SHOW_ERROR }));
    }
}

export const changeValue = (atualSector) => {
    return dispatch => {
        dispatch({ type: sectorTypes.CHANGE_VALUE, payload: atualSector });
    }
}

export const clear = () => {
    return dispatch => {
        dispatch({ type: sectorTypes.CLEAR });
    }
}