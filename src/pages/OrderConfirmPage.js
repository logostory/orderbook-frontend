import React from 'react';
import queryString from 'query-string';
import OrderConfirm from '../components/Order/OrderConfirm';

/*
    로직이 Container로 나눌만큼 크지 않아 Page에서 수행
*/
class OrderConfirmPage extends React.Component {
    handleClickConfirm = () => {
        const { history } = this.props;
        history.push('/basic');
    };

    handleClickAbout = f => f;

    render() {
        const { handleClickConfirm, handleClickAbout } = this;
        const { location: { search } } = this.props;
        let { number } = queryString.parse(search);
        if (number === 'undefined' || number === undefined || number === null) { number = '미정'; }

        return (
            <OrderConfirm
                handleClickConfirm={handleClickConfirm}
                handleClickAbout={handleClickAbout}
                orderNumber={number}
            />
        );
    }
}

export default OrderConfirmPage;
