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
            return (
                // eslint-disable-next-line react/no-array-index-key
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
