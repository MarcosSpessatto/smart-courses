import * as AreaApi from './AreaApi';
import * as areaTypes from './AreaActionTypes';
import * as dialogTypes from '../../Common/Dialog/DialogActionTypes';

export const saveArea = (area) => {
    return dispatch => {
        AreaApi
            .saveArea(area)
            .then(areaSaved => dispatch({ type: areaTypes.SAVE_AREA, payload: areaSaved }))
            .then(() => dispatch(getAreas()))
            .then(() => dispatch(clear()))
            .then(() => dispatch({type: dialogTypes.SHOW_SUCCESS}))
            .catch((err) => dispatch({ type:  dialogTypes.SHOW_ERROR }));
    }
}

export const getAreas = () => {
    return dispatch => {
        AreaApi
            .getAreas()
            .then(areas => dispatch({ type: areaTypes.GET_AREAS, payload: areas }))
            .catch((err) => dispatch({ type:  dialogTypes.SHOW_ERROR }));
    }
}

export const removeArea = (areaId) => {
    return dispatch => {
        AreaApi
            .removeArea(areaId)
            .then(areaId => dispatch({ type: areaTypes.REMOVE_AREA, payload: areaId }))
            .then(() => dispatch(getAreas()))
            .then(() => dispatch({type: dialogTypes.SHOW_DELETE_SUCCESS}))
            .catch((err) => dispatch({ type:  dialogTypes.SHOW_ERROR }));
    }
}

export const changeValue = (event) => {
    return dispatch => {
        dispatch({ type: areaTypes.CHANGE_VALUE, payload: event.target });
    }
}

export const clear = () => {
    return dispatch => {
        dispatch({ type: areaTypes.CLEAR });
    }
}