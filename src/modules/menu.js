import { createAction, handleActions } from 'redux-actions';
import api from 'utils/api';

export const GET_SEAT_ID = 'menu/GET_SEAT_ID';
export const GET_STORE = 'menu/GET_STORE';
export const GET_CATEGORIES = 'menu/GET_CATEGORIES';
export const GET_MENUS = 'menu/GET_MENUS';

export const CHANGE_SELECTED_CATEGORY = 'menu/CHANGE_SELECTED_CATEGORY';
export const CATEGORY_CHANGE = 'menu/CATEGORY_CHANGE';

export const changeSelectedCategory = createAction(CHANGE_SELECTED_CATEGORY, value => value);

export const categoryChange = createAction(CATEGORY_CHANGE, chgID => chgID);

export const getSeatId = seatId => ({
    type: GET_SEAT_ID,
    payload: seatId,
});

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

    selectedMenu: null,
    selectedCategory: 0,

    categories: [],
    products: [],

    seatId: undefined,
    shopId: undefined,
    shopImagePath: null,
    shopName: undefined,
};

export default handleActions(
    {
        [GET_SEAT_ID]: (state, action) => ({
            ...state,
            seatId: action.payload,
        }),
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
