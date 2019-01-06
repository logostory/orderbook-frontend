import React from 'react';

import PaymentContainer from 'containers/payment/PaymentContainer';
import Header from 'components/Header';
import Footer from 'components/Footer';

const PaymentPage = () => (
    <React.Fragment>
        <Header title="Payment Methods" />
        <PaymentContainer />
        <Footer totalPrice={0} text="Proceed to Transaction" />
    </React.Fragment>
);

export default PaymentPage;
