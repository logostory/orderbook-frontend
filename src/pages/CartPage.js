import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartContainer from 'containers/cart/CartContainer';

import Header from 'components/Header';
import Footer from 'components/Footer';

// eslint-disable-next-line react/prefer-stateless-function
class CartPage extends Component {
    render() {
        const { totalPrice } = this.props;

        return (
            <div>
                <Header title="My Order" />
                <CartContainer />
                <Footer totalPrice={totalPrice} text="Place Order" />
            </div>
        );
    }
}

export default connect(
    state => ({
        totalPrice: state.Cart.totalPrice,
    }),
)(CartPage);
