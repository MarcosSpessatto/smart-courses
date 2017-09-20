import * as types from './EmployeeActionTypes';

const INITIAL_STATE = {
    employee: {
        name: '',
        function: '',
        blocked: false,
        badge: ''
    },
    employees: [],
    employeeLength: 0
};

export default (state = INITIAL_STATE, action) => {
    if (action.type === types.SAVE_EMPLOYEE) {
        return { ...state, employee: action.payload };
    }
    else if (action.type === types.GET_EMPLOYEES) {
        return { ...state, employees: action.payload, employeeLength: action.payload.length };
    }
    else if (action.type === types.REMOVE_EMPLOYEE) {
        return { ...state };
    }
    else if (action.type === types.CHANGE_VALUE_EMPLOYEE) {
        return { ...state, employee: action.payload };
    }
    else if (action.type === types.CLEAR_EMPLOYEE) {
        return { ...state, employee: {} };
    }

    return state;
}