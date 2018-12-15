
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Payment from 'components/Payment';

// eslint-disable-next-line react/prefer-stateless-function
class PaymentContainer extends Component {
    render() {
        const { totalPrice } = this.props;

        return (
            <Payment />
        );
    }
}

export default connect(
    state => ({
        totalPrice: state.Cart.totalPrice,
    }),
)(PaymentContainer);
