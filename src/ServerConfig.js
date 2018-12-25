const ServerConfig = {
    ROOT_URL: 'https://api-orderbook.logostory.io',

    // 토큰 발행 시 필요한 Authorization 헤더
    TOKEN_AUTHORIZATION: 'basic b3JkZXJib29rOnNlY3JldA==',

    // 토큰 발행 시 필요한 Form 데이터
    TOKEN_AUTH_FORM: {
        username: 'test@email.com',
        password: 'password',
        grant_type: 'password',
    },
};

export default ServerConfig;
