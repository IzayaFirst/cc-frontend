import axios from 'axios'
import apiURL from '../config'


function axiosRequest({
    url,
    method,
    params,
    headers = {
        'Content-Type': 'application/json',
    },
}) {
    return axios.request({
        baseURL: apiURL,
        url,
        method,
        headers: Object.assign(headers),
        params: Object.assign({}, params),
    });
}

function getUrlRandomString({
    url,
}) {
    return `${url}?cache=${new Date().getTime()}`;
}


export function get({
    url,
    params,
}) {
    const method = 'get';
    return axiosRequest({
        url: getUrlRandomString({
          url,
        }),
        method,
        params,
    })
}