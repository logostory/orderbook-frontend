import React from 'react';
import OrderConfirm from "../components/Order/OrderConfirm";
import {withRouter} from "react-router-dom";
import queryString from 'query-string';

class OrderConfirmPage extends React.Component {

    handleClickConfirm = (e) => {
        const { history } = this.props;
        history.push('/basic');
    };

    handleClickAbout = (e) => {
        const { history } = this.props;
    };

    render() {
        const { handleClickConfirm, handleClickAbout } = this;
        const { location: { search }} = this.props;
        const { number } = queryString.parse(search);

        return (
            <OrderConfirm handleClickConfirm={handleClickConfirm} handleClickAbout={handleClickAbout} orderNumber={number}/>
        );
    }
}

export default withRouter(OrderConfirmPage);