import * as types from './CourseActionTypes';

const INITIAL_STATE = {
    course: {
        name: '',
        start: '',
        end: '',
        teacher: '',
        sector: '',
        modality: '',
        area: '',
        weight: 5
    },
    courses: [],
    courseLength: 0
};

export default (state = INITIAL_STATE, action) => {
    if (action.type === types.SAVE_COURSE) {
        return { ...state, course: action.payload };
    }
    else if (action.type === types.GET_COURSES) {
        return { ...state, courses: action.payload, courseLength: action.payload.length };
    }
    else if (action.type === types.REMOVE_COURSE) {
        return { ...state };
    }
    else if (action.type === types.CHANGE_VALUE_COURSE) {
        return { ...state, course: action.payload };
    }
    else if (action.type === types.CLEAR_COURSE) {
        return { ...state, course: {} };
    }

    return state;
}