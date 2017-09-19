import constants from '../../main/constants';
import axios from 'axios';
import { verifyResponse } from '../../Common/ResponseApi/ResponseApi';

export const getSectors = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(`${constants.api}/sector`, )
            .then(verifyResponse)
            .then(resolve)
            .catch(reject);
    });
}

export const saveSector = (sector) => {
    return new Promise((resolve, reject) => {
        axios
            .post(`${constants.api}/sector`, { sector })
            .then(verifyResponse)
            .then(resolve)
            .catch(reject);
    });
}

export const removeSector = (sectorId) => {
    return new Promise((resolve, reject) => {
        axios
            .delete(`${constants.api}/sector/${sectorId}`)
            .then(verifyResponse)
            .then(resolve)
            .catch(reject);
    });
}