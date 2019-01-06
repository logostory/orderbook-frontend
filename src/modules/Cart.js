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
export const showFooter = ({ cart }) => console.log(cart.items.length) || cart.items.length > 0;

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
