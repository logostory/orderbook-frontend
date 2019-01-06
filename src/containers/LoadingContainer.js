import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import queryString from 'query-string';

import * as menuActions from 'modules/menu';
import { requestNewAccessToken, getAccessToken } from 'modules/OAuth';
import Loading from 'components/Loading';

class OAuthContainer extends Component {
    // 컨테이너 로딩 시점
    componentDidMount() {
        const { requestToken: askOAuthToken } = this.props;

        askOAuthToken();
    }

    // 로딩 이후 전환 시 호출되는 메소드
    moveToNextPage = () => {
        const {
            getStoreInfo, getCategories, getMenus, history, location: { search },
        } = this.props;
        let { shopId } = queryString.parse(search);

        if (shopId === null || shopId === undefined) {
            const goToDemo = window.confirm('존재하지 않는 상점입니다. 데모로 이동하시겠습니까?');
            if (!goToDemo) { return; }
            shopId = 2;
        }

        Promise.all([getStoreInfo(shopId), getCategories(shopId), getMenus(shopId)]).then((() => history.push('/basic')));
    }

    render() {
        const { accessToken } = this.props;

        const accessTokenIsLoaded = accessToken !== null && accessToken !== undefined;
        const shopApiIsLoaded = true;
        const done = accessTokenIsLoaded && shopApiIsLoaded;

        return (
            <Loading
                done={done}
                moveToNextPage={this.moveToNextPage}
            />
        );
    }
}

const mapStateToProps = state => ({
    accessToken: getAccessToken(state),
});

const mapDispatchToProps = {
    requestToken: requestNewAccessToken,
    getStoreInfo: menuActions.getStoreInfo,
    getCategories: menuActions.getCategories,
    getMenus: menuActions.getMenus,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OAuthContainer));
