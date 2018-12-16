import { createAction, handleActions } from 'redux-actions';

const CHANGE_SELECTED_CATEGORY = 'menu/CHANGE_SELECTED_CATEGORY';
const CLICK_MENU = 'menu/CLICK_MENU';
const CATEGORY_CHANGE = 'menu/CATEGORY_CHANGE';

const CLICK_CLOSE = 'menu/CLICK_CLOSE';
const ADD_TO_ORDER = 'menu/ADD_TO_ORDER';

export const changeSelectedCategory = createAction(CHANGE_SELECTED_CATEGORY, value => value);

// @LEO 메뉴 클릭시 액션이 필요하실거 같아서 일단 만들어 놨습니다.
export const clickManu = createAction(CLICK_MENU, key => key);
export const clickClose = createAction(CLICK_CLOSE, key => key);
export const addToOrder = createAction(ADD_TO_ORDER, value => value);

export const categoryChange = createAction(CATEGORY_CHANGE, chgID => chgID);

// API LOAD 구현 되면 삭제
const initialState = {
    openDig: false,
    selectedCategory: 0,
    categories: [
        { categoryId: 0, categoryName: '버거메뉴' },
        { categoryId: 1, categoryName: '사이드' },
        { categoryId: 2, categoryName: '음료수' },
        { categoryId: 3, categoryName: '세트메뉴' },
    ],
    products: [
        {
            categoryId: 0,
            categoryName: '버거메뉴',
            productId: 1,
            productName: '바스버거',
            productImage: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg',
            productPrice: 5800,
            options: [
                {
                    menuId: 1,
                    optionId: 1,
                    optionName: '페티와 치츠 추가',
                    optionPrice: 1000,
                },
                {
                    menuId: 1,
                    optionId: 2,
                    optionName: '계란프리이어 추가',
                    optionPrice: 900,
                },
            ],
        },
        {
            categoryId: 0,
            categoryName: '버거메뉴',
            productId: 2,
            productName: '더블 베이컨 치즈 버거 세트',
            productImage: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg',
            productPrice: 11200,
        },
        {
            categoryId: 0,
            categoryName: '버거메뉴',
            productId: 3,
            productName: '더블 베이컨 치즈 버거 세트',
            productImage: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg',
            productPrice: 11200,
        },
        {
            categoryId: 1,
            categoryName: '메뉴1',
            productId: 4,
            productName: '더블 베이컨 치즈 버거 세트',
            productImage: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg',
            productPrice: 11200,
        },
        {
            categoryId: 1,
            categoryName: '메뉴1',
            productId: 5,
            productName: '더블 베이컨 치즈 버거 세트',
            productImage: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg',
            productPrice: 11200,
        },
        {
            categoryId: 2,
            categoryName: '메뉴2',
            productId: 6,
            productName: '더블 베이컨 치즈 버거 세트',
            productImage: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg',
            productPrice: 11200,
        },
        {
            categoryId: 2,
            categoryName: '메뉴2',
            productId: 7,
            productName: '더블 베이컨 치즈 버거 세트',
            productImage: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg',
            productPrice: 11200,
        },
        {
            categoryId: 3,
            categoryName: '메뉴3',
            productId: 8,
            productName: '더블 베이컨 치즈 버거 세트',
            productImage: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg',
            productPrice: 11200,
        },
        {
            categoryId: 3,
            categoryName: '메뉴3',
            productId: 9,
            productName: '더블 베이컨 치즈 버거 세트',
            productImage: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg',
            productPrice: 11200,
        },
    ],
    selectedMenu: [null],
    selectedOption: [null],
    totalPrice: null,
    cart: null,
};

export default handleActions(
    {
      [CHANGE_SELECTED_CATEGORY]: (state, action) => ({
          ...state,
          selectedCategory: action.payload,
      }
    },
    [CATEGORY_CHANGE]: (state, action) => {
      return {
        ...state,
        selectedCategory: action.payload,
      }
    },
        // @Leo 메뉴 클릭 액션
        [CLICK_MENU]: (state, action) => ({
            ...state,
            openDig: true,
            selectedMenu: state.products.filter(
                product => product.productId === action.payload,
            )[0],
        }),
        [CLICK_CLOSE]: state => ({
            ...state,
            openDig: false,
        }),
        [ADD_TO_ORDER]: (state, action) => {
            console.log(action.payload);
            return {
                ...state,
                cart: action.payload,
                openDig: false,
            };
        },
    }, initialState,
);
