
export const CART_ITEM_REMOVE = 'cart/ITEM_REMOVE';

export const itemRemove = ({ itemKey }) => ({
    type: CART_ITEM_REMOVE,
    payload: { itemKey },
});

const initialState = {
    identity: [{
        shop: 0,
        table: 0,
    }],
    orders: [
        {
            name: '바스버거',
            image: 'http://s3.amazon.com/...',
            unitPrice: 5000,
        },
        {
            name: '치킨버거',
            image: 'http://s3.amazon.com/...',
            unitPrice: 5500,
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

export default (state = initialState, action) => {
    switch (action.type) {
    case CART_ITEM_REMOVE:
        // eslint-disable-next-line no-case-declarations
        const orders = state.orders.slice();
        orders.splice(action.payload.itemKey, 1);
        return ({
            ...state,
            orders,
        });
    default:
        return state;
    }
};
