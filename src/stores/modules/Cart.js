import { createAction, handleActions } from 'redux-actions';

const CART_ITEM_REMOVE = 'cart/ITEM_REMOVE';

export const itemRemove = createAction(CART_ITEM_REMOVE);

const initialState = {
    identity: {
        shop: 0,
        table: 0,
    },
    orders: [
        {
            name: '바스버거',
            image: 'http://s3.amazon.com/...',
            unitPrice: 5000,
            amount: 2,
        },
        {
            name: '치킨버거',
            image: 'http://s3.amazon.com/...',
            unitPrice: 5500,
            amount: 2,
            options: [
                {
                    name: '계란 프라이',
                    image: 'http://s3.amazon.com/...',
                    unitPrice: 1000,
                },
                {
                    name: '감자',
                    image: 'http://s3.amazon.com/...',
                    unitPrice: 2000,
                },
            ],
        },
    ],
};

export default handleActions({
    [CART_ITEM_REMOVE]: (state, action) => {
        const orders = state.orders.slice();
        orders.splice(action.payload.itemKey, 1);
        return ({
            ...state,
            orders,
        });
    },
}, initialState);
