import React, { Component } from 'react';
import { CartMenuItem, CartOptionItem } from './cart';
import withStyles from '@material-ui/core/styles/withStyles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../stores/modules/Cart';


const styles = theme => {
	return {
		margin0: {
			margin: 0
		}
	}
}

class CartContainer extends Component {
	getTotalAmount () {
		const { cost } = this.props;
		return cost;
	};

	componentDidMount () {

	}

	render() {
		return (
			<div>
				<CartMenuItem />
				<CartOptionItem />
			</div>
		);
	}
}

export default connect(
	state => {
		return {
			orders: state
		}
	},
	dispatch => {
		return {
			CartActions: bindActionCreators(actions, dispatch)
		}
	}
)(withStyles(styles)(CartContainer));