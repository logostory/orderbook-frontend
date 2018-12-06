import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { CartMenuItem, CartOptionItem } from './cart';
import * as actions from '../stores/modules/Cart';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

import * as util from '../utils/utils';

// import plus minus bar

const styles = theme => {
	return {
		root: {
			flexGrow: 1,
		},
		gridItem: {
			margin: '1rem'
		},
		button: {
			margin: theme.spacing.unit,
		},
	}
}

class CartContainer extends Component {
	getOrders () {
		const { orders, classes, CartActions } = this.props;
		let unitTotal = 0;

		const OrderList = orders.map((order, key) => {
			const options = order.get('options');
			const price = order.get('unitPrice');
			const amount = order.get('amount');

			unitTotal = parseInt(price);

			const OptionList = options && options.map((option, optkey) => {
				const price = option.get('unitPrice');
				unitTotal += parseInt(price);
				return (
					<CartOptionItem name={option.get('name')} unitPrice={price} key={optkey} />
				)
			});

			return (
				<Card key={key} style={{marginTop: '15px', backgroundColor: '#fafaff', padding: '10px'}}>
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

		return (
		<Grid item xs={12} className={classes.gridItem}>
			{OrderList}
		</Grid>
		)
	}

	getOrderSize (props) {
		const { orders } = props;
		if (!orders.size) {
			alert('주문 내역이 없습니다. 뒤로가기');
		}
		return true
	}

	shouldComponentUpdate (nextProps, nextState) {
		return this.getOrderSize(nextProps);
	}

	componentWillMount () {
		return this.getOrderSize(this.props);
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
	state => {
		return {
			orders: state.Cart.get("orders")
		}
	},
	dispatch => {
		return {
			CartActions: bindActionCreators(actions, dispatch)
		}
	}
)(withStyles(styles)(CartContainer));