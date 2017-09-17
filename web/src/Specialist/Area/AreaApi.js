import constants from '../../main/constants.json';
import axios from 'axios';
import { verifyResponse } from '../../Common/ResponseApi/ResponseApi';

export const getAreas = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(`${constants.api}/area`, )
            .then(verifyResponse)
            .then(resolve)
            .catch(reject);
    });
}

export const saveArea = (area) => {
    return new Promise((resolve, reject) => {
        axios
            .post(`${constants.api}/area`, { area })
            .then(verifyResponse)
            .then(resolve)
            .catch(reject);
    });
}

export const removeArea = (areaId) => {
    return new Promise((resolve, reject) => {
        axios
            .delete(`${constants.api}/area/${areaId}`)
            .then(verifyResponse)
            .then(resolve)
            .catch(reject);
    });
}