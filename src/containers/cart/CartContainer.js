/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from 'modules/Cart';
import CartList from 'components/Cart/CartList';

// eslint-disable-next-line react/prefer-stateless-function
class CartContainer extends Component {
    render() {
        const { menus, CartActions } = this.props;
        return (
            <div>
                <CartList menus={menus} CartActions={CartActions} />
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
