import React, { Component } from 'react';
import CategoryList from './CategoryList';
import MenuList from './MenuList';

class MenuContainer extends Component {
  state = {
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
        productImage: 'https://s3.amazon.com/xxx/products/1/xxx.jpg',
        productPrice: 5800,
      },
      {
        categoryId: 0,
        categoryName: '버거메뉴',
        productId: 2,
        productName: '더블 베이컨 치즈 버거 세트',
        productImage: 'https://s3.amazon.com/xxx/products/2/yyy.jpg',
        productPrice: 11200,
      },
      {
        categoryId: 0,
        categoryName: '버거메뉴',
        productId: 3,
        productName: '더블 베이컨 치즈 버거 세트',
        productImage: 'https://s3.amazon.com/xxx/products/2/yyy.jpg',
        productPrice: 11200,
      },
      {
        categoryId: 1,
        categoryName: '메뉴1',
        productId: 4,
        productName: '더블 베이컨 치즈 버거 세트',
        productImage: 'https://s3.amazon.com/xxx/products/2/yyy.jpg',
        productPrice: 11200,
      },
      {
        categoryId: 1,
        categoryName: '메뉴1',
        productId: 5,
        productName: '더블 베이컨 치즈 버거 세트',
        productImage: 'https://s3.amazon.com/xxx/products/2/yyy.jpg',
        productPrice: 11200,
      },
      {
        categoryId: 2,
        categoryName: '메뉴2',
        productId: 6,
        productName: '더블 베이컨 치즈 버거 세트',
        productImage: 'https://s3.amazon.com/xxx/products/2/yyy.jpg',
        productPrice: 11200,
      },
      {
        categoryId: 2,
        categoryName: '메뉴2',
        productId: 7,
        productName: '더블 베이컨 치즈 버거 세트',
        productImage: 'https://s3.amazon.com/xxx/products/2/yyy.jpg',
        productPrice: 11200,
      },
      {
        categoryId: 3,
        categoryName: '메뉴3',
        productId: 8,
        productName: '더블 베이컨 치즈 버거 세트',
        productImage: 'https://s3.amazon.com/xxx/products/2/yyy.jpg',
        productPrice: 11200,
      },
      {
        categoryId: 3,
        categoryName: '메뉴3',
        productId: 9,
        productName: '더블 베이컨 치즈 버거 세트',
        productImage: 'https://s3.amazon.com/xxx/products/2/yyy.jpg',
        productPrice: 11200,
      },
    ],
  };

  handleClickCategory = value => {
    this.setState({
      selectedCategory: value,
    });
  };

  render() {
    const {categories, selectedCategory} = this.state;
    return (
      <div>
        <CategoryList
          categories={categories}
          value={selectedCategory}
          onClick={this.handleClickCategory}
        />
        <MenuList products={this.state.products} categories={categories} />
      </div>
    );
  }
}

export default MenuContainer;
