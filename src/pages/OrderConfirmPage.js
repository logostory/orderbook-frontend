import React from 'react';
import OrderConfirm from "../components/Order/OrderConfirm";
import {withRouter} from "react-router-dom";

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
        return (
            <OrderConfirm handleClickConfirm={handleClickConfirm} handleClickAbout={handleClickAbout} orderNumber={'A21'}/>
        );
    }
}

export default withRouter(OrderConfirmPage);