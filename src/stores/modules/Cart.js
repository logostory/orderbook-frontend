import { createAction, handleActions } from "redux-actions";
import { Map, List } from "immutable";

const CART_ITEM_REMOVE = 'cart/ITEM_REMOVE';

export const itemRemove = createAction(CART_ITEM_REMOVE);

const initialState = Map({
	tableNum: 1,
	orders: List([
		Map({
			name: "바스버거",
			image: "http://s3.amazon.com/...",
			unitPrice: 5000,
			amount: 2
		}),
		Map({
			name: "통구이버거",
			image: "http://s3.amazon.com/...",
			unitPrice: 6000,
			amount: 3,
			options: List([
				Map({
					name: "계란 프라이",
					image: "http://s3.amazon.com/...",
					unitPrice: 1000
				})
			])
		})
	])
});

export default handleActions({
	[CART_ITEM_REMOVE]: (state, action) => {
		let orders = state.get('orders');
		orders = orders.delete(action.payload.itemKey);
		return state.set('orders', orders);
	},
}, initialState)
