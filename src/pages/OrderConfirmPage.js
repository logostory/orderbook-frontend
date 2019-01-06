import React from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import OrderConfirm from '../components/Order/OrderConfirm';

class OrderConfirmPage extends React.Component {
    handleClickConfirm = (e) => {
        const { history } = this.props;
        history.push('/basic');
    };

    handleClickAbout = f => f;

    render() {
        const { handleClickConfirm, handleClickAbout } = this;
        const { location: { search } } = this.props;
        const { number } = queryString.parse(search);

        return (
            <OrderConfirm handleClickConfirm={handleClickConfirm} handleClickAbout={handleClickAbout} orderNumber={number} />
        );
    }
}

export default withRouter(OrderConfirmPage);
