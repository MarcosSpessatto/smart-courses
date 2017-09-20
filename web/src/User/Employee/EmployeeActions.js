import * as EmployeeApi from './EmployeeApi';
import * as SearchApi from '../Search/SearchCoursesApi';
import * as searchActionTypes from '../Search/SearchCoursesActionTypes';
import * as dialogTypes from '../../Common/Dialog/DialogActionTypes';


export const finalizeCourse = (courseEmployee) => {
    return dispatch => {
        EmployeeApi
            .finalizeCourse(courseEmployee)
            .then(employeeAndCourses => dispatch({
                type: searchActionTypes.FINALIZE_COURSE
            }))
            .then(() => SearchApi.searchCoursesByUser(courseEmployee.employee.badge))
            .then(employeeAndCourses => dispatch({
                type: searchActionTypes.SEARCH_COURSES,
                payload: {
                    employee: employeeAndCourses.employee,
                    courses: employeeAndCourses.courses,
                    userSearched: true,
                    coursesFinished: employeeAndCourses.coursesFinished,
                    coursesInProgress: employeeAndCourses.coursesInProgress
                }
            }))
            .catch((err) => {
                dispatch({ type: dialogTypes.SHOW_ERROR });
            });
    }
}