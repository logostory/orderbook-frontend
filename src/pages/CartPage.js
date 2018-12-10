import React from 'react';
// eslint-disable-next-line import/no-unresolved
import CartContainer from 'containers/cart/CartContainer';
import withStyles from '@material-ui/core/styles/withStyles';

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

const CartPage = ({ classes }) => (
    <div className={classes.root}>
        <div className={classes.Top}>Header</div>
        <CartContainer />
        <div className={classes.Mask}>Footer</div>
    </div>
);

export default withStyles(styles)(CartPage);
