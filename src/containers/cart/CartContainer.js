/* eslint-disable react/sort-comp */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from 'modules/Cart';
import CartList from 'components/Cart/CartList';

// eslint-disable-next-line react/prefer-stateless-function
class CartContainer extends Component {
    handleRemove = (itemKey) => {
        this.totalPrice = 0;
        const { CartActions } = this.props;
        CartActions.removeCartMenu({ itemKey });
    }

    render() {
        const { menus } = this.props;
        const { handleRemove } = this;

        return (
            <div>
                <CartList menus={menus} handleRemove={handleRemove} />
            </div>
        );
    }
}

export default connect(
    state => ({
        menus: state.Cart.menus,
    }),
    dispatch => ({
        CartActions: bindActionCreators(actions, dispatch),
    }),
)(CartContainer);
