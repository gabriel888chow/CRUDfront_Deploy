import axios from 'axios';

export default function axiosWrapper(method, url, data) {
    return axios ({
        method: method,
        url: url,
        responseType: 'json',
        data: data
    })
}