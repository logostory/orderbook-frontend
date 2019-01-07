import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as menuActions from 'modules/menu';
import { requestNewAccessToken, getAccessToken } from 'modules/OAuth';
import Loading from 'components/Loading';

class LoadingContainer extends Component {
    // 컨테이너 로딩 시점
    componentDidMount() {
        const { requestToken: askOAuthToken } = this.props;

        askOAuthToken();
    }

    // 로딩 이후 전환 시 호출되는 메소드
    moveToNextPage = () => {
        let { shopId, seatId } = this.props;
        if (shopId === null || shopId === undefined) {
            const goToDemo = window.confirm('데모로 이동하시겠습니까?');
            if (!goToDemo) { return; }
            shopId = 2;
            seatId = 999;
        }
        this.loadShopData(shopId);

        const { getSeatId } = this.props;
        getSeatId(seatId);
    }

    loadShopData(shopId) {
        const {
            getStoreInfo, getCategories, getMenus, onLoadFinished,
        } = this.props;

        Promise.all([
            getStoreInfo(shopId),
            getCategories(shopId),
            getMenus(shopId),
        ])
            .then(() => onLoadFinished());
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
    getSeatId: menuActions.getSeatId,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadingContainer);
