import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// eslint-disable-next-line import/no-unresolved
import * as actions from 'modules/Cart';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
// eslint-disable-next-line import/no-unresolved
// import * as util from 'utils/utils';
// eslint-disable-next-line import/no-unresolved
import { CartMenuItem, CartOptionItem } from 'components/cart';
import cancelSvg from 'assets/svg/custom_icons_cancel.svg';

// eslint-disable-next-line no-unused-vars
const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: '0 16px',
        display: 'block',
        marginBottom: '100px',
        // border: '1px solid black',
    },
    product: {
        width: '100%',
        // border: '1px solid red',
    },
    Remove: {
        display: 'flex',
        width: '100%',
        height: '48px',
        objectFit: 'contain',
        alignItems: 'right',
        justifyContent: 'flex-end',
        // border: '1px solid blue',
    },
    caption: {
        marginTop: '19px',
        paddingRight: '4px',
        height: '16px',
        fontFamily: 'Roboto',
        fontSize: '12px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.33',
        letterSpacing: '0.4px',
        textAlign: 'right',
        color: '#3eafa2',
        // border: '1px solid gray',
    },
    Times: {
        marginTop: '13px',
        color: '#3eafa2',
        cursor: 'pointer',
        textAlign: 'center',
        width: '24px',
        height: '24px',
        // border: '1px solid #3eafa2',
    },
    'Rectangle-13': {
        height: '1px',
        opacity: '0.12',
        backgroundColor: '#000000',
    },
});


class CartContainer extends Component {
    componentWillMount() {
        return this.getOrderSize(this.props);
    }

    shouldComponentUpdate(nextProps) {
        return this.getOrderSize(nextProps);
    }

    // eslint-disable-next-line react/sort-comp
    totalPrice = 0;

    // eslint-disable-next-line class-methods-use-this
    getOptions(options) {
        const OptionList = options.map((option, key) => {
            const { name, unitPrice } = option;
            return (
                <CartOptionItem name={name} unitPrice={unitPrice} key={key} />
            );
        });
        return OptionList;
    }

    getOrders() {
        const { orders, classes, CartActions } = this.props;

        const OrderList = orders.map((order, key) => {
            const { options, name, unitPrice } = order;

            return (
                // eslint-disable-next-line react/no-array-index-key
                <Grid key={key} component="div" className={classes.product}>
                    <Grid component="div" className={classes.Remove}>
                        <Typography component="span" className={classes.caption}>Remove this order</Typography>
                        <Typography component="span" variant="h5" className={classes.Times} onClick={() => CartActions.itemRemove({ itemKey: `${key}` })}>
                            <img src={cancelSvg} />
                        </Typography>
                    </Grid>
                    <CartMenuItem name={name} unitPrice={unitPrice} />
                    {options && this.getOptions(options)}
                    <div className={classes['Rectangle-13']} />
                </Grid>
            );
        });

        return (
            <div>
                {OrderList}
            </div>
        );
    }

    // eslint-disable-next-line class-methods-use-this
    getOrderSize(props) {
        const { orders } = props;

        if (!orders.length) {
            alert('주문 내역이 없습니다. 뒤로가기');
        }
        return true;
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.root}>
                {this.getOrders()}
            </Grid>
        );
    }
}

export default connect(
    state => ({
        orders: state.Cart.orders,
    }),
    dispatch => ({
        CartActions: bindActionCreators(actions, dispatch),
    }),
)(withStyles(styles)(CartContainer));
