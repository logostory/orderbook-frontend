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

let initialState = {
    totalPrice: 0,
    identity: [{
        storeId: 0,
        seatId: 0,
    }],
    menus: [],
};

if (process.env.NODE_ENV === 'development') {
    initialState = {
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
    let initPrice = 0;
    initialState.menus.map((menu) => {
        initPrice += menu.unitPrice;
        const { options } = menu;
        options && options.map(option => initPrice += option.unitPrice);
    });
    initialState.totalPrice = initPrice;
}

export default (state = initialState, action) => {
    // eslint-disable-next-line no-case-declarations
    const menus = state.menus.slice();
    const { totalPrice } = state;
    let price = totalPrice;

    const calcPrice = (menu, flag) => {
        menu.map((menu) => {
            price += (menu.unitPrice * flag);
            const { options } = menu;
            options && options.map(option => price += (option.unitPrice * flag));
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
