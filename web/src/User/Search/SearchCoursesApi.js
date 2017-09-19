import constants from '../../main/constants.json';
import axios from 'axios';
import { verifyResponse } from '../../Common/ResponseApi/ResponseApi';

export const searchCoursesByUser = (userBadge) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`${constants.api}/user/search/${userBadge}`)
            .then(verifyResponse)
            .then(resolve)
            .catch(reject);
    });
}