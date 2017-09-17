import constants from '../../main/constants.json';
import axios from 'axios';
import { verifyResponse } from '../../Common/ResponseApi/ResponseApi';

export const getTeachers = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(`${constants.api}/teacher`, )
            .then(verifyResponse)
            .then(resolve)
            .catch(reject);
    });
}

export const saveTeacher = (teacher) => {
    return new Promise((resolve, reject) => {
        axios
            .post(`${constants.api}/teacher`, { teacher })
            .then(verifyResponse)
            .then(resolve)
            .catch(reject);
    });
}

export const removeTeacher = (teacherId) => {
    return new Promise((resolve, reject) => {
        axios
            .delete(`${constants.api}/teacher/${teacherId}`)
            .then(verifyResponse)
            .then(resolve)
            .catch(reject);
    });
}