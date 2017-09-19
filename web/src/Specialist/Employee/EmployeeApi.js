import constants from '../../main/constants';
import axios from 'axios';
import { verifyResponse } from '../../Common/ResponseApi/ResponseApi';

export const getEmployees = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(`${constants.api}/employee`, )
            .then(verifyResponse)
            .then(resolve)
            .catch(reject);
    });
}

export const saveEmployee = (employee) => {
    return new Promise((resolve, reject) => {
        axios
            .post(`${constants.api}/employee`, { employee })
            .then(verifyResponse)
            .then(resolve)
            .catch(reject);
    });
}

export const removeEmployee = (employeeId) => {
    return new Promise((resolve, reject) => {
        axios
            .delete(`${constants.api}/employee/${employeeId}`)
            .then(verifyResponse)
            .then(resolve)
            .catch(reject);
    });
}