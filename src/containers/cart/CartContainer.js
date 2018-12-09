import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// eslint-disable-next-line import/no-unresolved
import * as actions from 'stores/modules/Cart';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
// eslint-disable-next-line import/no-unresolved
import * as util from 'utils/utils';
// eslint-disable-next-line import/no-unresolved
import { CartMenuItem, CartOptionItem } from 'components/cart';

// eslint-disable-next-line no-unused-vars
const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    gridItem: {
        margin: '1rem',
    },
    button: {
        margin: theme.spacing.unit,
        cursor: 'pointer',
    },
});


/**
 *
 *
 *
 *
        const OrderList = orders.map((order, key) => {
            const options = order.get('options');
            const price = order.get('unitPrice');
            const amount = order.get('amount');

            unitTotal = parseInt(price);

            const OptionList = options && options.map((option, optkey) => {
                console.log(option);
                const price = option.get('unitPrice');
                unitTotal += parseInt(price);
                return (
                    <CartOptionItem name={option.get('name')} unitPrice={price} key={optkey} />
                )
            });

            return (
                <Card key={key} style={{marginTop: '15px', backgroundColor: '#fafaff', padding: '10px'}}>
                    <div className={classes.Remove}>
                        <div className={classes.caption}>
                            Remove this order
                            <span style={{fontSize: '22px'}}
                                value={key}
                                className={classes.button}
                                onClick={(e) => { CartActions.itemRemove({itemKey: e.target.getAttribute('value')}) }}
                            >&times;</span>
                        </div>
                    </div>
                    <CartMenuItem name={order.get('name')} unitPrice={price} />
                    {OptionList}
                    <h2 style={{margin: 0}}>{util.priceFormat(unitTotal * parseInt(amount))}</h2>
                    <Button
                        value={key}
                        color="inherit"
                        variant="contained"
                        component="button"
                        className={classes.button}
                        onClick={(e) => {CartActions.itemRemove({itemKey: e.target.parentNode.value})}}>
                        삭제
                    </Button>
                </Card>
            )
        });

 *
*/

class CartContainer extends Component {
    componentWillMount() {
        return this.getOrderSize(this.props);
    }

    shouldComponentUpdate(nextProps) {
        return this.getOrderSize(nextProps);
    }

    totalPrice = 0;

    getOptions(options) {
        const OptionList = options.map((option, key) => {
            const { name, image, unitPrice } = option;
            return (
                <CartOptionItem name={name} unitPrice={unitPrice} key={key} />
            );
        });
        return OptionList;
    }

    getOrders() {
        const { orders, classes, CartActions } = this.props;

        const OrderList = orders.map((order, key) => {
            // eslint-disable-next-line prefer-destructuring
            const { options, name, unitPrice } = order;
            // const OptionList = options && this.getOptions(options);
            return (
                <Card key={key} style={{ marginTop: '15px', backgroundColor: '#fafaff', padding: '10px' }}>
                    <div className={classes.Remove}>
                        <div className={classes.caption}>
                            Remove this order
                            <span
                                style={{ fontSize: '22px' }}
                                value={key}
                                className={classes.button}
                                onClick={(e) => { CartActions.itemRemove({ itemKey: e.target.getAttribute('value') }); }}
                            >
                                &times;
                            </span>
                        </div>
                    </div>
                    <CartMenuItem name={name} unitPrice={unitPrice} />
                    {options && this.getOptions(options)}
                </Card>
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
        const { classes, orders } = this.props;
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
