import * as EmployeeApi from './EmployeeApi';
import * as employeeTypes from './EmployeeActionTypes';
import * as dialogTypes from '../../Common/Dialog/DialogActionTypes';

export const saveEmployee = (employee) => {
    return dispatch => {
        EmployeeApi
            .saveEmployee(employee)
            .then(employeeSaved => dispatch({ type: employeeTypes.SAVE_EMPLOYEE, payload: employeeSaved }))
            .then(() => dispatch(getEmployees()))
            .then(() => dispatch(clear()))
            .then(() => dispatch({type: dialogTypes.SHOW_SUCCESS}))
            .catch((err) => dispatch({ type:  dialogTypes.SHOW_ERROR }));
    }
}

export const getEmployees = () => {
    return dispatch => {
        EmployeeApi
            .getEmployees()
            .then(employees => dispatch({ type: employeeTypes.GET_EMPLOYEES, payload: employees }))
            .catch((err) => dispatch({ type:  dialogTypes.SHOW_ERROR }));
    }
}

export const removeEmployee = (employeeId) => {
    return dispatch => {
        EmployeeApi
            .removeEmployee(employeeId)
            .then(employeeId => dispatch({ type: employeeTypes.REMOVE_EMPLOYEE, payload: employeeId }))
            .then(() => dispatch(getEmployees()))
            .then(() => dispatch({type: dialogTypes.SHOW_DELETE_SUCCESS}))
            .catch((err) => dispatch({ type:  dialogTypes.SHOW_FOREIGN_KEY_ERROR }));
    }
}

export const changeValue = (actualEmployee) => {
    return dispatch => {
        dispatch({ type: employeeTypes.CHANGE_VALUE_EMPLOYEE, payload: actualEmployee });
    }
}

export const clear = () => {
    return dispatch => {
        dispatch({ type: employeeTypes.CLEAR_EMPLOYEE });
    }
}