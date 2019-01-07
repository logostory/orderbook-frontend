import api from 'utils/api';
import { GET_SEAT_ID, GET_STORE } from './menu';

export const CLEAR_CART = 'cart/CLEAR_CART';
export const MAKE_ORDER = 'cart/MAKE_ORDER';
export const MAKE_ORDER_SUCCESS = 'cart/ORDER_SUCCESS';
export const REMOVE_ITEM = 'cart/REMOVE_ITEM';
export const ADD_ITEM = 'cart/ADD_ITEM';

export const dispathOrderId = orderId => ({
    type: MAKE_ORDER_SUCCESS,
    payload: orderId,
});

export const clearCart = () => ({
    type: CLEAR_CART,
});

export const removeItemByIndex = index => ({
    type: REMOVE_ITEM,
    payload: index,
});

export const addItem = item => ({
    type: ADD_ITEM,
    payload: item,
});

export const makeOrder = () => (dispatch, getState) => {
    const { cart: { shopId, seatId, items } } = getState();

    // API에 { optionId: 1 } 과 같이 보내야 함
    const mappedItems = items.map(({ menuId, options }) => ({
        menuId,
        options: options.map(option => ({
            optionId: option,
        })),
    }));

    api.post(`/v1/api/shops/${shopId}/orders`, {
        menus: mappedItems,
        seatNumber: seatId,
    })
        .then(({ data: { orderId } }) => {
            dispatch(dispathOrderId(orderId));
            dispatch(clearCart());
        });
};

const initialState = {
    shopId: undefined,
    seatId: undefined,
    items: [],
    lastOrderId: undefined,
};

export default (state = initialState, action) => {
    switch (action.type) {
    case CLEAR_CART:
        return {
            ...state,
            items: [],
        };
    case MAKE_ORDER_SUCCESS:
        return {
            ...state,
            lastOrderId: action.payload,
        };
    case GET_SEAT_ID:
        return {
            ...state,
            seatId: action.payload,
        };
    case GET_STORE: {
        const { shopId } = action.payload;
        return {
            ...state,
            shopId,
        };
    }
    case ADD_ITEM: {
        const { items } = state;

        return {
            ...state,
            items: [
                ...items,
                action.payload,
            ],
        };
    }
    case REMOVE_ITEM: {
        const { items } = state;

        return {
            ...state,
            items: items.filter((item, index) => index !== action.payload),
        };
    }
    default:
        return state;
    }
};

export const getItems = ({ cart }) => cart.items;
export const showFooter = ({ cart }) => cart.items.length > 0;
export const getLastOrderId = ({ cart }) => cart.lastOrderId;
export const getOrderIsCompleted = ({ cart }) => cart.lastOrderId !== undefined;

// state와 무관련
export const calcSubtotalPrice = (selectedMenu, chosenOptions) => {
    if (selectedMenu === null || selectedMenu === undefined) { return 0; }

    const { options, price: menuPrice } = selectedMenu;

    let subtotal = menuPrice;
    options.forEach(({ optionId, price: optionPrice }) => {
        if (chosenOptions.includes(optionId)) { subtotal += optionPrice; }
    });

    return subtotal;
};

// state와 관련
export const getTotalPrice = ({ cart: { items }, menu: { products } }) => {
    let total = 0;
    let selectedMenu;
    let subtotal = 0;
    items.forEach((item) => {
        selectedMenu = products.find(menu => item.menuId === menu.menuId);
        subtotal = calcSubtotalPrice(selectedMenu, item.options);
        total += subtotal;
    });

    return total;
};
