import React from 'react';

import CartContainer from 'containers/cart/CartContainer';
import Header from 'components/Header';
import Footer from 'components/Footer';

const CartPage = () => (
    <React.Fragment>
        <Header title="My Order" />
        <CartContainer />
        <Footer totalPrice={0} text="Place Order" />
    </React.Fragment>
);

export default CartPage;
