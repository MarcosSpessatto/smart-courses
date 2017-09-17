import { combineReducers } from 'redux';

import AreaReducers from '../Specialist/Area/AreaReducers';
import ErrorReducer from './ErrorReducer';

const rootReducer = combineReducers({
    area: AreaReducers,
    error: ErrorReducer
});

export default rootReducer;