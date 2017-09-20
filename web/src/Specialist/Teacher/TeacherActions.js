import * as TeacherApi from './TeacherApi';
import * as teacherTypes from './TeacherActionTypes';
import * as dialogTypes from '../../Common/Dialog/DialogActionTypes';

export const saveTeacher = (teacher) => {
    return dispatch => {
        TeacherApi
            .saveTeacher(teacher)
            .then(teacherSaved => dispatch({ type: teacherTypes.SAVE_TEACHER, payload: teacherSaved }))
            .then(() => dispatch(getTeachers()))
            .then(() => dispatch(clear()))
            .then(() => dispatch({type: dialogTypes.SHOW_SUCCESS}))
            .catch((err) => dispatch({ type:  dialogTypes.SHOW_ERROR }));
    }
}

export const getTeachers = () => {
    return dispatch => {
        TeacherApi
            .getTeachers()
            .then(teachers => dispatch({ type: teacherTypes.GET_TEACHERS, payload: teachers }))
            .catch((err) => dispatch({ type:  dialogTypes.SHOW_ERROR }));
    }
}

export const removeTeacher = (teacherId) => {
    return dispatch => {
        TeacherApi
            .removeTeacher(teacherId)
            .then(areaId => dispatch({ type: teacherTypes.REMOVE_TEACHER, payload: teacherId }))
            .then(() => dispatch(getTeachers()))
            .then(() => dispatch({type: dialogTypes.SHOW_DELETE_SUCCESS}))
            .catch((err) => dispatch({ type:  dialogTypes.SHOW_FOREIGN_KEY_ERROR }));
    }
}

export const changeValue = (event) => {
    return dispatch => {
        dispatch({ type: teacherTypes.CHANGE_VALUE_TEACHER, payload: event.target });
    }
}

export const clear = () => {
    return dispatch => {
        dispatch({ type: teacherTypes.CLEAR_TEACHER });
    }
}