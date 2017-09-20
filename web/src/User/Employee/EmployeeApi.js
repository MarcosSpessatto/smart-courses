import constants from '../../main/constants';
import axios from 'axios';
import { verifyResponse } from '../../Common/ResponseApi/ResponseApi';

export const finalizeCourse = (courseEmployee) => {
    return new Promise((resolve, reject) => {
        axios
            .put(`${constants.api}/course/finalize`, { courseEmployee })
            .then(verifyResponse)
            .then(resolve)
            .catch(reject);
    });
}
