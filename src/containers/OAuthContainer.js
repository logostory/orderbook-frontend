import React, { Component } from 'react';
import { connect } from 'react-redux';

import { requestNewAccessToken, getAccessToken } from 'modules/OAuth';
import Loading from 'components/Loading';

class OAuthContainer extends Component {
    // 컨테이너 로딩 시점
    componentDidMount() {
        const { requestToken: askOAuthToken } = this.props;

        askOAuthToken();
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
    requestToken: requestNewAccessToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(OAuthContainer);
