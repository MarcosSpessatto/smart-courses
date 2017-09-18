import * as CourseApi from './CourseApi';
import * as courseTypes from './CourseActionTypes';
import * as dialogTypes from '../../Common/Dialog/DialogActionTypes';

export const saveCourse = (course) => {
    return dispatch => {
        CourseApi
            .saveCourse(course)
            .then(courseSaved => dispatch({ type: courseTypes.SAVE_COURSE, payload: courseSaved }))
            .then(() => dispatch(getCourses()))
            .then(() => dispatch(clear()))
            .then(() => dispatch({type: dialogTypes.SHOW_SUCCESS}))
            .catch((err) => dispatch({ type:  dialogTypes.SHOW_ERROR }));
    }
}

export const getCourses = () => {
    return dispatch => {
        CourseApi
            .getCourses()
            .then(courses => dispatch({ type: courseTypes.GET_COURSES, payload: courses }))
            .catch((err) => dispatch({ type:  dialogTypes.SHOW_ERROR }));
    }
}

export const removeCourse = (courseId) => {
    return dispatch => {
        CourseApi
            .removeCourse(courseId)
            .then(courseId => dispatch({ type: courseTypes.REMOVE_COURSE, payload: courseId }))
            .then(() => dispatch(getCourses()))
            .then(() => dispatch({type: dialogTypes.SHOW_DELETE_SUCCESS}))
            .catch((err) => dispatch({ type:  dialogTypes.SHOW_ERROR }));
    }
}

export const changeValue = (actualCourse) => {
    return dispatch => {
        dispatch({ type: courseTypes.CHANGE_VALUE, payload: actualCourse });
    }
}

export const clear = () => {
    return dispatch => {
        dispatch({ type: courseTypes.CLEAR });
    }
}