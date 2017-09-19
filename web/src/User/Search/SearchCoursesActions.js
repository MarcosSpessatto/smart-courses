import * as SearchCoursesApi from './SearchCoursesApi';
import * as searchCoursesTypes from './SearchCoursesActionTypes';
import * as dialogTypes from '../../Common/Dialog/DialogActionTypes';
import * as loadingTypes from '../../Common/Loading/LoadingActionTypes';


export const searchCoursesByUser = (userBadge) => {
    return dispatch => {
        dispatch({ type: loadingTypes.IS_LOADING, payload: true });
        SearchCoursesApi
            .searchCoursesByUser(userBadge)
            .then(employeeAndCourses => dispatch({
                type: searchCoursesTypes.SEARCH_COURSES,
                payload: {
                    employee: employeeAndCourses.employee,
                    courses: employeeAndCourses.courses,
                    userSearched: true,
                    coursesFinished: employeeAndCourses.coursesFinished,
                    coursesInProgress: employeeAndCourses.coursesInProgress
                }
            }))
            .then(() => dispatch({ type: loadingTypes.IS_LOADING, payload: false }))
            .catch((err) => {
                dispatch({ type: dialogTypes.SHOW_ERROR });
                dispatch({ type: loadingTypes.IS_LOADING, payload: false });
            });
    }
}

export const changeValue = (event) => {
    return dispatch => {
        dispatch({ type: searchCoursesTypes.CHANGE_VALUE, payload: event.target });
    }
}
