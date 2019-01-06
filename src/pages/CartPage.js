import React from 'react';

import CartContainer from 'containers/cart/CartContainer';
import Header from 'components/Header';
import FooterContainer from 'containers/FooterContainer';

const CartPage = ({ history }) => (
    <React.Fragment>
        <Header title="My Order" />
        <CartContainer />
        <FooterContainer text="Place Order" onClick={() => history.push('/payment')} />
    </React.Fragment>
);

export default CartPage;
