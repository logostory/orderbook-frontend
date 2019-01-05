export const CART_REMOVE_MENU = 'cart/REMOVE_MENU';
export const CART_ADD_MENU = 'cart/ADD_MENU';

export const removeCartMenu = ({ itemKey }) => ({
    type: CART_REMOVE_MENU,
    payload: { itemKey },
});

export const addCartMenu = menu => ({
    type: CART_ADD_MENU,
    payload: { menu },
});

const initialState = {
    totalPrice: 0,
    identity: [{
        storeId: 0,
        seatId: 0,
    }],
    menus: [],
};

export default (state = initialState, action) => {
    // eslint-disable-next-line no-case-declarations
    const menus = state.menus.slice();
    const { totalPrice } = state;
    let price = totalPrice;

    const calcPrice = (targetMenu, flag) => {
        targetMenu.forEach((menu) => {
            price += (menu.unitPrice * flag);
            const { options } = menu;
            if (options) {
                options.forEach((option) => {
                    price += (option.unitPrice * flag);
                });
            }
        });
        return price;
    };

    switch (action.type) {
    case CART_REMOVE_MENU:
        // eslint-disable-next-line no-case-declarations
        const itemMenu = menus.splice(action.payload.itemKey, 1);
        calcPrice(itemMenu, -1);
        return ({
            ...state,
            totalPrice: price,
            menus,
        });
    case CART_ADD_MENU:
        menus.push(action.payload.menu);
        calcPrice(action.payload.menu, +1);
        return ({
            ...state,
            totalPrice: price,
            menus,
        });
    default:
        return state;
    }
};
