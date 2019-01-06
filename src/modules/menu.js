import { createAction, handleActions } from 'redux-actions';
import api from 'utils/api';

const GET_STORE = 'menu/GET_STORE';
const GET_CATEGORIES = 'menu/GET_CATEGORIES';
const GET_MENUS = 'menu/GET_MENUS';

const CHANGE_SELECTED_CATEGORY = 'menu/CHANGE_SELECTED_CATEGORY';
const CATEGORY_CHANGE = 'menu/CATEGORY_CHANGE';

export const changeSelectedCategory = createAction(CHANGE_SELECTED_CATEGORY, value => value);

// @LEO 메뉴 클릭시 액션이 필요하실거 같아서 일단 만들어 놨습니다.

export const categoryChange = createAction(CATEGORY_CHANGE, chgID => chgID);


export const getStoreInfo = shopId => dispatch => (
    api.get(`/v1/api/shops/${shopId}`)
        .then((data) => {
            dispatch({
                type: GET_STORE,
                payload: data.data,
            });
        })
        .catch()
);

export const getCategories = shopId => dispatch => (
    api.get(`/v1/api/shops/${shopId}/categories`)
        .then((data) => {
            dispatch({
                type: GET_CATEGORIES,
                payload: data.data,
            });
        })
        .catch()
);

export const getMenus = shopId => dispatch => (
    api.get(`/v1/api/shops/${shopId}/menus`)
        .then(data => dispatch({
            type: GET_MENUS,
            payload: data.data,
        }))
        .catch()
);

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
    shopId: undefined,
    shopImagePath: null,
    shopName: null,
};

export default handleActions(
    {
        [GET_STORE]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [GET_CATEGORIES]: (state, action) => ({
            ...state,
            categories: action.payload,
        }),
        [GET_MENUS]: (state, action) => ({
            ...state,
            products: action.payload,
        }),
        [CHANGE_SELECTED_CATEGORY]: (state, action) => ({
            ...state,
            selectedCategory: action.payload,
        }),
        [CATEGORY_CHANGE]: (state, action) => ({
            ...state,
            selectedCategory: action.payload,
        }),
    }, initialState,
);
