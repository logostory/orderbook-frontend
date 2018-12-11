import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from 'modules/Cart';

import withStyles from '@material-ui/core/styles/withStyles';
import CartContainer from 'containers/cart/CartContainer';
import Header from 'components/Header';
import Footer from 'components/Footer';

// eslint-disable-next-line no-unused-vars
const styles = theme => ({
    root: {
        width: '100%',
        // eslint-disable-next-line quotes
        [`@media screen and (max-width: 376px) and  (orientation: portrait)`]: {
            width: '360px',
        },
    },
    Top: {
        height: '56px',
        objectFit: 'contain',
        backgroundColor: '#ff4a5b',
        color: 'white',
        textAlign: 'center',
        alignItems: 'center',
    },
    Mask: {
        height: '100px',
        backgroundColor: '#ff4a5b',
        color: 'white',
        textAlign: 'center',
    },
});

const CartPage = ({ classes, totalPrice }) => {
    return (
        <div className={classes.root}>
            <Header title="My Order" />
            <CartContainer />
            <Footer totalPrice={totalPrice} text="Place Order" />
        </div>
    );
};

// export default withStyles(styles)(CartPage);
export default connect(
    state => ({
        totalPrice: state.Cart.totalPrice,
    }),
    dispatch => ({
        CartActions: bindActionCreators(actions, dispatch),
    }),
)(withStyles(styles)(CartPage));
