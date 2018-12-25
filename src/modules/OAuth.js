import api from 'utils/api';
import ServerConfig from 'ServerConfig';

/* Action Types */
/*
    1. 토큰을 생성해야 함

    2. 토큰을 확인해야 함

    3. 토큰을 리프레시해야 함
*/
export const OAUTH_REQUEST_TOKEN = 'OAUTH_GENERATE_TOKEN';
export const OAUTH_CHECK_TOKEN = 'OAUTH_CHECK_TOKEN';
export const OAUTH_REFRESH_TOKEN = 'OAUTH_REFRESH_TOKEN';

/* Action Creators */
export const requestToken = () => (dispatch) => {
    // 1. AUTHRIZATION 헤더 변경
    // api.setAccessToken(ServerConfig.TOKEN_AUTHORIZATION);

    // 2. Content-Type 변경
    api.setContentType('application/x-www-form-urlencoded');

    const formData = api.convertBodyAsFormUrlEncoded(ServerConfig.TOKEN_AUTH_FORM);

    // 3. OAuth 토큰 요청 진행
    api.post('/oauth/token', formData)
        .then(({ data }) => {
            const { access_token: accessToken, refresh_token: refreshToken } = data;

            // 4. api에 AUTHORIZATION 헤더를 accessToken으로 지정
            api.setAccessToken(`bearer ${accessToken}`);

            // 5. api는 기본적으로 json 요청을 하므로 Content-Type 변경
            api.setContentType('application/json');

            // 6. 받은 accessToken, refreshToken을 Reducer로 전달
            dispatch({
                type: OAUTH_REQUEST_TOKEN,
                payload: { accessToken, refreshToken },
            });
        });
};

export const checkToken = () => ({
    type: OAUTH_CHECK_TOKEN,
    payload: '',
});

export const refreshToken = () => ({
    type: OAUTH_REFRESH_TOKEN,
    payload: '',
});

/* Initial State */
const initialState = {
    accessToken: null,
    refreshToken: null,
};

/* Reducer */
export default function reducer(state = initialState, action) {
    switch (action.type) {
    case OAUTH_REQUEST_TOKEN:
        return {
            ...state,
            ...action.payload,
        };

    default:
        return state;
    }
}

/* Selectors */
export const getAccessToken = ({ OAuth }) => OAuth.accessToken;
