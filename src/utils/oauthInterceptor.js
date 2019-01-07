import {
    checkToken, getAccessToken, requestTokenRefresh, cleanupOAuth,
} from 'modules/OAuth';
import api from './api';

// 발급, 조회 시에 무한 루프가 걸리게 됨
const tokenUrls = [
    '/oauth/check_token',
    '/oauth/token',
];

// 1회만 등록되어야 함
let registered = false;

// store를 전달받아야 한다.
const configureAndConnectOAUthInterceptor = ({ dispatch, getState }) => {
    const onFulfilled = (AxiosRequestConfig) => {
        if (tokenUrls.includes(AxiosRequestConfig.url)) {
            return AxiosRequestConfig;
        }

        const accessToken = getAccessToken(getState());

        return new Promise((resolve) => {
            checkToken(accessToken)
                .then(({ data: { active } }) => {
                    // 리프레시 필요 없음
                    if (active) {
                        resolve(AxiosRequestConfig);
                        cleanupOAuth(accessToken);
                        return;
                    }

                    // interceptor는 Redux Store에 connect될 수 없기 때문에
                    // dispatch, getState를 직접 전달
                    requestTokenRefresh()(dispatch, getState)
                        .then(() => resolve(AxiosRequestConfig));
                });
        });
    };

    const onRejected = error => error;

    if (!registered) {
        api.addInterceptor(onFulfilled, onRejected);
        registered = true;
    }
};

export default configureAndConnectOAUthInterceptor;
