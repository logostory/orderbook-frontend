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
        const { moveToNextPage, accessToken } = this.props;

        const accessTokenIsLoaded = accessToken !== null && accessToken !== undefined;
        const shopApiIsLoaded = true;
        const done = accessTokenIsLoaded && shopApiIsLoaded;

        return (
            <Loading
                done={done}
                moveToNextPage={moveToNextPage}
            />
        );
    }
}

const mapStateToProps = state => ({
    accessToken: getAccessToken(state),
});

const mapDispatchToProps = {
    requestToken: requestNewAccessToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(OAuthContainer);
