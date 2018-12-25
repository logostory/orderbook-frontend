import axios from 'axios';
import ServerConfig from 'ServerConfig';

const api = axios.create({
    baseURL: ServerConfig.ROOT_URL,
    auth: {
        username: 'orderbook',
        password: 'secret',
    },
});

// axios global config
// json => 'application/json'
// form => 'application/x-www-form-urlencoded'
api.setContentType = (type) => {
    api.defaults.headers.post['Content-Type'] = type;
};

api.setAccessToken = (accessToken) => {
    api.defaults.headers.common.Authorization = accessToken;
};

api.convertBodyAsFormUrlEncoded = (data) => {
    const str = [];
    Object.entries(data).forEach(([key, value]) => {
        str.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
    });
    return str.join('&');
};

export default api;
