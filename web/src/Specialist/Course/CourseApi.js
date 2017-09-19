import constants from '../../main/constants';
import axios from 'axios';
import { verifyResponse } from '../../Common/ResponseApi/ResponseApi';

export const getCourses = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(`${constants.api}/course`, )
            .then(verifyResponse)
            .then(resolve)
            .catch(reject);
    });
}

export const saveCourse = (course) => {
    return new Promise((resolve, reject) => {
        axios
            .post(`${constants.api}/course`, { course })
            .then(verifyResponse)
            .then(resolve)
            .catch(reject);
    });
}

export const removeCourse = (courseId) => {
    return new Promise((resolve, reject) => {
        axios
            .delete(`${constants.api}/course/${courseId}`)
            .then(verifyResponse)
            .then(resolve)
            .catch(reject);
    });
}