import axios from 'axios';
import qs from 'qs';

const paramsSerializer = params =>
    qs.stringify(params, { arrayFormat: 'repeat' });

const axiosInstance = axios.create({
    paramsSerializer: paramsSerializer,
});

export default axiosInstance;