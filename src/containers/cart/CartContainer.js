/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from 'modules/Cart';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
// import * as util from 'utils/utils';
import { CartMenuItem, CartOptionItem } from 'components/cart';
import RemoveSvg from 'Assets/svg/custom_icon_remove.svg';

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
        marginTop: '12px',
        color: '#3eafa2',
        cursor: 'pointer',
        textAlign: 'center',
        width: '20px',
        height: '20px',
        // border: '1px solid #3eafa2',
    },
    'Rectangle-13': {
        height: '1px',
        opacity: '0.12',
        backgroundColor: '#000000',
    },
});


class CartContainer extends Component {
    totalPrice = 0;

    componentWillMount() {
        return this.getOrderSize(this.props);
    }

    componentDidMount() {
        const { CartActions } = this.props;
        CartActions.sumPrice(this.totalPrice);
    }

    shouldComponentUpdate(nextProps) {
        return this.getOrderSize(nextProps);
    }

    componentDidUpdate() {
        const { CartActions } = this.props;
        CartActions.sumPrice(this.totalPrice);
    }

    getOptions(options) {
        const OptionList = options.map((option, key) => {
            const { name, unitPrice } = option;
            this.totalPrice += unitPrice;
            return (
                <CartOptionItem name={name} unitPrice={unitPrice} key={key} />
            );
        });
        return OptionList;
    }

    getOrders() {
        const { menus, classes, CartActions } = this.props;
        // const { totalPrice } = this;
        // console.log(totalPrice);
        const OrderList = menus.map((order, key) => {
            const { options, name, unitPrice /* , amount */ } = order;
            this.totalPrice += unitPrice;
            return (
                <Grid key={key} component="div" className={classes.product}>
                    <Grid component="div" className={classes.Remove}>
                        <Typography component="span" className={classes.caption}>Remove this order</Typography>
                        <Typography component="span" variant="h5" className={classes.Times} onClick={() => CartActions.itemRemove({ itemKey: `${key}` })}>
                            <img src={`${RemoveSvg}`} alt="Remove" />
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

    getOrderSize(props) {
        const { menus } = props;

        if (!menus.length) {
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
        menus: state.Cart.menus,
    }),
    dispatch => ({
        CartActions: bindActionCreators(actions, dispatch),
    }),
)(withStyles(styles)(CartContainer));
