import React from 'react';
import queryString from 'query-string';

import LoadingContainer from '../containers/LoadingContainer';

const LoadingPage = ({ location: { search }, history }) => {
    const { shopId, seatId } = queryString.parse(search);
    return (
        <LoadingContainer
            shopId={shopId}
            seatId={seatId}
            onLoadFinished={() => history.push('/basic')}
        />
    );
};

/*
Q:
    withRouter를 Page에도 쓸 필요가 있는가?

A:
    <Route exact path="/" component={LoadingPage} /> 와 같이
    Route의 component로 전달되는 컴포넌트에는 React-router가 제공하는
    props가 기본적으로 전달되므로, withRouter HoC를 쓸 필요가 없습니다.

*/

export default LoadingPage;
