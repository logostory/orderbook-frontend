import React, { Component } from 'react';
import { connect } from 'react-redux';

import { requestToken, getAccessToken } from 'modules/OAuth';
import Loading from 'components/Loading';

class OAuthContainer extends Component {
    // 컨테이너 로딩 시점
    componentDidMount() {
        const { requestToken: req } = this.props;

        // OAuth 토큰 요청
        req();
    }

    render() {
        const { handleClick, accessToken } = this.props;

        if (accessToken === null) { return null; }

        return <Loading handleClick={handleClick} />;
    }
}

const mapStateToProps = state => ({
    accessToken: getAccessToken(state),
});

const mapDispatchToProps = {
    requestToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(OAuthContainer);
