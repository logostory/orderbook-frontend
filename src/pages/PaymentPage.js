import React from 'react';
import { connect } from 'react-redux';

import { makeOrder, getOrderIsCompleted } from 'modules/Cart';
import PaymentContainer from 'containers/payment/PaymentContainer';
import Header from 'components/Header';
import FooterContainer from 'containers/FooterContainer';
import { getLastOrderId } from '../modules/Cart';

/*
    Payment 페이지에서 Order를 요청하고 number를 받아와야 함
*/
const PaymentPage = ({
    history, makeOrder, orderDone, lastOrderId,
}) => {
    let btnClicked = false;

    const handleOrder = () => {
        if (btnClicked) { return; }

        btnClicked = true;

        makeOrder();
    };

    if (orderDone) {
        history.push(`/order?number=${lastOrderId}`);
    }

    return (
        <React.Fragment>
            <Header title="Payment Methods" />
            <PaymentContainer />
            <FooterContainer text="Proceed to Transaction" onClick={handleOrder} />
        </React.Fragment>
    );
};

const mapStateToProps = state => ({
    lastOrderId: getLastOrderId(state),
    orderDone: getOrderIsCompleted(state),
});

const mapDispatchToProps = {
    makeOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentPage);
