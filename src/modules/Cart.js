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
        storeId: 0,
        seatId: 0,
    }],
    menus: [
        {
            id: 1,
            name: '바스버거',
            image: 'http://s3.amazon.com/...',
            unitPrice: 5000,
        },
        {
            id: 2,
            name: '치킨버거',
            image: 'http://s3.amazon.com/...',
            unitPrice: 5500,
            options: [
                {
                    id: 100,
                    name: '계란 프라이',
                    image: 'http://s3.amazon.com/...',
                    unitPrice: 1000,
                },
                {
                    id: 200,
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
    const menus = state.menus.slice();

    switch (action.type) {
    case CART_ITEM_REMOVE:
        menus.splice(action.payload.itemKey, 1);
        return ({
            ...state,
            menus,
        });
    case CART_ADD_ITEM:
        menus.push(action.payload.product);
        return ({
            ...state,
            menus,
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
