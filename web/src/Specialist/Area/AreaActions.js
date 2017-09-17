import * as AreaApi from './AreaApi';
import * as types from './AreaActionTypes';

export const saveArea = (area) => {
    return dispatch => {
        AreaApi
            .saveArea(area)
            .then(areaSaved => dispatch({ type: types.SAVE_AREA, payload: areaSaved }))
            .then(() => dispatch(getAreas()))
            .then(() => dispatch(clear()))
            .catch((err) => dispatch({ type: 'ERROR', payload: err }));
    }
}

export const getAreas = () => {
    return dispatch => {
        AreaApi
            .getAreas()
            .then(areas => dispatch({ type: types.GET_AREAS, payload: areas }))
            .catch((err) => dispatch({ type: 'ERROR', payload: err }));
    }
}

export const removeArea = (areaId) => {
    return dispatch => {
        AreaApi
            .removeArea(areaId)
            .then(areaId => dispatch({ type: types.REMOVE_AREA, payload: areaId }))
            .then(() => dispatch(getAreas()))
            .catch((err) => dispatch({ type: 'ERROR', payload: err }));
    }
}

export const changeValue = (event) => {
    return dispatch => {
        dispatch({ type: types.CHANGE_VALUE, payload: event.target });
    }
}

export const clear = () => {
    return dispatch => {
        dispatch({ type: types.CLEAR });
    }
}