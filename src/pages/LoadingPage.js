import React from 'react';
import queryString from 'query-string';

import api from 'utils/api';
import LoadingContainer from '../containers/LoadingContainer';

/**
 * TODO
 *
 * 1. Module에서 API 구현
 *
 * 2. Page는 Container를 렌더링
 *
 * 3. Container는 Module과 연결되어 호출
 *
 * 4. Container가 적절한 기능을 Component에게 전달
 *
 * 5. Container는 Component를 렌더링하고, Component는 화면을 렌더링
 *
 * Server: http://api-orderbook.logostory.io/
 * ShopId: 2
 * Basic Auth: orderbook:secret
 * Access Token: c6c9daef-fd38-4cfa-8c35-2b08c965607c
 *
 * 1. OAuth 토큰 발행
 *    POST /oauth/token
 *      - Content-Type: application/x-www-form-urlencoded
 *      - Authorization: basic b3JkZXJib29rOnNlY3JldA==
 *
 * 2. GET /v1/api/shops/{shopId}
 *      - Authorization: bearer
 * 3. GET /v1/api/shops/{shopId}/categories
 * 4. GET /v1/api/shops/{shopId}/menus
 */
class LoadingPage extends React.Component {
    constructor() {
        super();

        this.moveToNextPage = this.moveToNextPage.bind(this);
    }

    // 로딩 이후 전환 시 호출되는 메소드
    moveToNextPage() {
        const { history, location: { search } } = this.props;
        const { shopId } = queryString.parse(search);
        console.log(`shopId:${shopId}`);

        api.get(`/v1/api/shops/${shopId}`)
            .then(({ data }) => {
                console.log(data);

                history.push('/basic');
            });
    }

    render() {
        return <LoadingContainer moveToNextPage={this.moveToNextPage} />;
    }
}

/*
Q:
    withRouter를 Page에도 쓸 필요가 있는가?

A:
    <Route exact path="/" component={LoadingPage} /> 와 같이
    Route의 component로 전달되는 컴포넌트에는 React-router가 제공하는
    props가 기본적으로 전달되므로, withRouter HoC를 쓸 필요가 없습니다.

*/
export default LoadingPage;
