import { createAction, handleActions } from 'redux-actions';

const CHANGE_SELECTED_CATEGORY = 'menu/CHANGE_SELECTED_CATEGORY';
const CLICK_MENU = 'menu/CLICK_MENU';
const CLICK_OPTION = 'menu/CLICK_OPTION';
const CATEGORY_CHANGE = 'menu/CATEGORY_CHANGE';

const CLICK_CLOSE = 'menu/CLICK_CLOSE';
const ADD_TO_ORDER = 'menu/ADD_TO_ORDER';

export const changeSelectedCategory = createAction(CHANGE_SELECTED_CATEGORY, value => value);

// @LEO 메뉴 클릭시 액션이 필요하실거 같아서 일단 만들어 놨습니다.
export const clickManu = createAction(CLICK_MENU, key => key);
export const clickOption = createAction(CLICK_OPTION, key => key);
export const clickClose = createAction(CLICK_CLOSE, key => key);
export const addToOrder = createAction(ADD_TO_ORDER, value => value);

export const categoryChange = createAction(CATEGORY_CHANGE, chgID => chgID);

// API LOAD 구현 되면 삭제
const initialState = {
    openDig: false,
    selectedCategory: 0,
    categories: [
        {
            categoryName: 'BUGERS',
            categoryId: 3,
        },
        {
            categoryName: 'SIDES',
            categoryId: 4,
        },
        {
            categoryName: 'BEVERAGES',
            categoryId: 5,
        },
    ],
    products: [
        {
            categoryId: 3,
            name: 'Cheeseburger',
            price: 6500,
            comment: 'Angus beef patty with creamy cheese, crispy lettuce',
            imagePath: 'https://s3.ap-northeast-2.amazonaws.com/logostory/orderbook/16-9/hamburger01.jpg',
            menuId: 6,
            options: [
                {
                    name: 'Double Cheese',
                    price: 1000,
                    optionId: 7,
                },
                {
                    name: 'Grilled Mushrooms',
                    price: 1500,
                    optionId: 8,
                },
                {
                    name: 'Double Meat',
                    price: 3000,
                    optionId: 9,
                },
                {
                    name: 'Extra Bacons',
                    price: 2000,
                    optionId: 10,
                },
            ],
        },
        {
            categoryId: 4,
            name: 'French frides',
            price: 7000,
            comment: 'Very nice french frides',
            imagePath: 'https://s3.ap-northeast-2.amazonaws.com/logostory/orderbook/16-9/frenchfries01.jpg',
            menuId: 26,
            options: [
                {
                    name: 'Tomato source',
                    price: 500,
                    optionId: 27,
                },
                {
                    name: 'Remon source',
                    price: 600,
                    optionId: 28,
                },
            ],
        },
    ],
    selectedMenu: null,
    selectedOption: [],
    totalPrice: 0,
    cart: null,
};

export default handleActions(
    {
        [CHANGE_SELECTED_CATEGORY]: (state, action) => ({
            ...state,
            selectedCategory: action.payload,
        }),

        [CATEGORY_CHANGE]: (state, action) => ({
            ...state,
            selectedCategory: action.payload,
        }),
        // @Leo 메뉴 클릭 액션
        [CLICK_MENU]: (state, action) => ({
            ...state,
            openDig: true,
            selectedMenu: state.products.filter(
                product => product.menuId === action.payload,
            )[0],
        }),
        [CLICK_OPTION]: (state, action) => ({
            ...state,
            selectedOption: state.selectedOption.concat(action.payload),
        }),
        [CLICK_CLOSE]: state => ({
            ...state,
            openDig: false,
        }),
        [ADD_TO_ORDER]: (state, action) => ({
            ...state,
            cart: action.payload,
            openDig: false,
        }),
    }, initialState,
);
