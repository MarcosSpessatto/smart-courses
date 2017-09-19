import * as loadingTypes from './LoadingActionTypes';

const INITIAL_STATE = { isLoading: false }

export default (state = INITIAL_STATE, action) => {
    if (action.type === loadingTypes.IS_LOADING)
        return { ...state, isLoading: action.payload };

    return state;
}