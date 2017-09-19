import constants from '../../main/constants';
import axios from 'axios';
import { verifyResponse } from '../../Common/ResponseApi/ResponseApi';

export const getModalities = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(`${constants.api}/modality`, )
            .then(verifyResponse)
            .then(resolve)
            .catch(reject);
    });
}

export const saveModality = (modality) => {
    return new Promise((resolve, reject) => {
        axios
            .post(`${constants.api}/modality`, { modality })
            .then(verifyResponse)
            .then(resolve)
            .catch(reject);
    });
}

export const removeModality = (modalityId) => {
    return new Promise((resolve, reject) => {
        axios
            .delete(`${constants.api}/modality/${modalityId}`)
            .then(verifyResponse)
            .then(resolve)
            .catch(reject);
    });
}