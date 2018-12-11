export const CART_ITEM_REMOVE = 'cart/ITEM_REMOVE';
export const CART_ADD_ITEM = 'cart/ADD_ITEM';
export const CART_SUM_PRICE = 'cart/SUM_PRICE';

export const itemRemove = ({ itemKey }) => ({
    type: CART_ITEM_REMOVE,
    payload: { itemKey },
});

export const addItem = ({ product }) => ({
    type: CART_ADD_ITEM,
    payload: { product },
});

export const sumPrice = totalPrice => ({
    type: CART_SUM_PRICE,
    payload: { totalPrice },
});

const initialState = {
    totalPrice: 0,
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
    // eslint-disable-next-line no-case-declarations
    const orders = state.orders.slice();

    switch (action.type) {
    case CART_ITEM_REMOVE:
        orders.splice(action.payload.itemKey, 1);
        return ({
            ...state,
            orders,
        });
    case CART_ADD_ITEM:
        orders.push(action.payload.product);
        return ({
            ...state,
            orders,
        });
    case CART_SUM_PRICE:
        // eslint-disable-next-line no-case-declarations
        const { totalPrice } = action.payload;
        return ({
            ...state,
            totalPrice,
        });
    default:
        return state;
    }
};
