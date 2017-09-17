import * as types from './TeacherActionTypes';

const INITIAL_STATE = { teacher: { name: '' }, teachers: [], teacherLength: 0 };

export default (state = INITIAL_STATE, action) => {
    if (action.type === types.SAVE_TEACHER) {
        return { ...state, teacher: action.payload };
    }
    else if (action.type === types.GET_TEACHERS) {
        return { ...state, teachers: action.payload, teacherLength: action.payload.length };
    }
    else if (action.type === types.REMOVE_TEACHER) {
        return { ...state };
    }
    else if (action.type === types.CHANGE_VALUE) {
        return { ...state, teacher: { name: action.payload.value } };
    }
    else if (action.type === types.CLEAR) {
        return { ...state, area: {} };
    }

    return state;
}