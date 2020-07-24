import http from 'axios';
import _ from 'lodash';

class ServerService {
    errorCheck(response) {
        return new Promise((resolve, reject) => {
            const status = _.get(response, 'data.status');
            if (!status) {
                reject(response);
            }
            const result = response.data.data;
            resolve(result);
        });
    }

    getHttp(url, params) {
        return http({
            method: 'get',
            url: url,
            params: params
        })
        .then((response) => {
            try {
                return this.errorCheck(response);
            }
            catch(error) {
                return error;
            }
        })
        .catch((error) => {
            return error;
        });
    }

    postHttp(url, params) {
        return http({
            method: 'post',
            url: url,
            data: params
        })
        .then((response) => {
            try {
                return this.errorCheck(response);
            }
            catch(error) {
                return error;
            }
        })
        .catch((error) => {
            return error;
        });
    }

    patchHttp(url, params) {
        return http({
            method: 'patch',
            url: url,
            data: params
        })
        .then((response) => {
            try {
                return this.errorCheck(response);
            }
            catch(error) {
                return error;
            }
        })
        .catch((error) => {
            return error;
        });
    }

    deleteHttp(url, params) {
        return http({
            method: 'delete',
            url: url,
            data: params
        })
        .then((response) => {
            try {
                return this.errorCheck(response);
            }
            catch(error) {
                return error;
            }
        })
        .catch((error) => {
            return error;
        });
    }
}

export default new ServerService()