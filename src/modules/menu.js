import {createAction, handleActions} from 'redux-actions';

const CHANGE_SELECTED_CATEGORY = 'menu/CHANGE_SELECTED_CATEGORY';
const CLICK_MENU = 'menu/CLICK_MENU';

export const changeSelectedCategory = createAction(CHANGE_SELECTED_CATEGORY, value => value);

// @LEO 메뉴 클릭시 액션이 필요하실거 같아서 일단 만들어 놨습니다.
export const clickManu = createAction(CLICK_MENU, key => key);


// API LOAD 구현 되면 삭제
const initialState = {
  selectedCategory: 0,
  categories: [
    {categoryId: 0, categoryName: '버거메뉴'},
    {categoryId: 1, categoryName: '사이드'},
    {categoryId: 2, categoryName: '음료수'},
    {categoryId: 3, categoryName: '세트메뉴'},
  ],
  products: [
    {
      categoryId: 0,
      categoryName: '버거메뉴',
      productId: 1,
      productName: '바스버거',
      productImage: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg',
      productPrice: 5800,
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
};

export default handleActions(
  {
    [CHANGE_SELECTED_CATEGORY]: (state, action) => {
      return {
        ...state,
        selectedCategory: action.payload,

      }
    },
    // @Leo 메뉴 클릭 액션
    [CLICK_MENU]: (state, action) => {
      console.log(`click product key is ${action.payload}`);
      return {
        ...state
      }
    }
  }, initialState
);