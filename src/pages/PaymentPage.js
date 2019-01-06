import React from 'react';

import PaymentContainer from 'containers/payment/PaymentContainer';
import Header from 'components/Header';
import FooterContainer from 'containers/FooterContainer';

const PaymentPage = ({ history }) => (
    <React.Fragment>
        <Header title="Payment Methods" />
        <PaymentContainer />
        <FooterContainer text="Proceed to Transaction" onClick={() => history.push('/order?number=미정')} />
    </React.Fragment>
);

export default PaymentPage;
