export const LOAD_SHOP = 'cart/LOAD_SHOP';
export const REMOVE_ITEM = 'cart/REMOVE_ITEM';
export const ADD_ITEM = 'cart/ADD_ITEM';

export const removeItemByIndex = index => ({
    type: REMOVE_ITEM,
    payload: index,
});

export const addItem = item => ({
    type: ADD_ITEM,
    payload: item,
});

const initialState = {
    shopId: undefined,
    seatId: undefined,
    items: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
    case LOAD_SHOP: {
        const { shopId, seatId } = action.payload;

        return {
            ...state,
            shopId,
            seatId,
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

        const next = {
            ...state,
            // payload가 대상 index이고, 1은 deleteCount 이다.
            items: items.filter((item, index) => index !== action.payload),
        };

        return next;
    }
    default:
        return state;
    }
};

export const getItems = ({ cart }) => cart.items;
