import * as CourseListApi from './CourseListApi';
import * as SearchApi from '../Search/SearchCoursesApi';
import * as searchActionTypes from '../Search/SearchCoursesActionTypes';
import * as dialogTypes from '../../Common/Dialog/DialogActionTypes';


export const subscribe = (courseEmployee) => {
    return dispatch => {
        CourseListApi
            .subscribe(courseEmployee)
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