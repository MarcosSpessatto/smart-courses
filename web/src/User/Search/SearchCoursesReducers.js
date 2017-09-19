import * as types from './SearchCoursesActionTypes';

const INITIAL_STATE = {
    employeeBadge: '',
    employee: {},
    courses: [],
    coursesFinished: [],
    coursesInProgress: [],
    coursesLength: 0,
    userSearched: false
};

export default (state = INITIAL_STATE, action) => {
    if (action.type === types.SEARCH_COURSES) {
        return {
            ...state,
            employee: action.payload.employee,
            courses: action.payload.courses,
            coursesFinished: action.payload.coursesFinished,
            coursesInProgress: action.payload.coursesInProgress,
            coursesLength: action.payload.courses.length,
            userSearched: action.payload.userSearched
        };
    }
    else if (action.type === types.CHANGE_VALUE) {
        return { ...state, employeeBadge: action.payload.value };
    }

    return state;
}