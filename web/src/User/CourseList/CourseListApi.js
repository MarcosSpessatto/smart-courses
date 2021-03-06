import constants from '../../main/constants';
import axios from 'axios';
import { verifyResponse } from '../../Common/ResponseApi/ResponseApi';

export const subscribe = (courseEmployee) => {
    return new Promise((resolve, reject) => {
        axios
            .put(`${constants.api}/course/subscribe`, { courseEmployee })
            .then(verifyResponse)
            .then(resolve)
            .catch(reject);
    });
}
