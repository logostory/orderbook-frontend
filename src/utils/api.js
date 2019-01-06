import axios from 'axios';
import ServerConfig from 'ServerConfig';

const api = axios.create({
    baseURL: ServerConfig.ROOT_URL,
});

api.addInterceptor = (onFulfilled, onRejected) => {
    api.interceptors.request.use(onFulfilled, onRejected);
};

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

api.getStore = (shopId) => {
    api.get(`/v1/api/shops/${shopId}`)
        .then(data => data.data)
        .catch();
};
api.getCategories = (shopId) => {
    api.get(`/v1/api/shops/${shopId}/categories`)
        .then(data => data.data)
        .catch();
};
api.getMenus = (shopId) => {
    api.get(`/v1/api/shops/${shopId}/menus`)
        .then(data => data.data)
        .catch();
};

export default api;
