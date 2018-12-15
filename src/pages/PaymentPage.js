import React from 'react';
import { connect } from 'react-redux';
import PaymentContainer from 'containers/payment/PaymentContainer';

import Header from 'components/Header';
import Footer from 'components/Footer';

const PaymentPage = ({ totalPrice }) => (
    <div>
        <Header title="Payment Methods" />
        <PaymentContainer />
        <Footer totalPrice={totalPrice} text="Proceed to Transaction" />
    </div>
);

export default connect(
    state => ({
        totalPrice: state.Cart.totalPrice,
    }),
)(PaymentPage);
