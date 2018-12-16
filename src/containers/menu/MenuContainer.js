import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as menuActions from 'modules/menu';

import {CategoryList} from 'components/Category';
import {MenuList} from 'components/Menu';

class MenuContainer extends Component {

  handleClickCategory = value => {
    const {MenuActions} = this.props;
    MenuActions.changeSelectedCategory(value)
  };

  // @Leo 매뉴 클릭 함수
  handleClickMenu = menuId => {
    const {MenuActions} = this.props;
    MenuActions.clickManu(menuId)
  };

  handleScroll = (e) => {
    const children = e.target.childNodes;
    const { selectedCategory, MenuActions } = this.props;
    for(let i = 0, height = 0, chgID; i < children.length; i++) {
      if (children[i].id === '') continue;
      height += children[i].scrollHeight;
      if (e.target.scrollTop < height) {
        chgID = children[i].id.split('_')[1];
        if (chgID !== selectedCategory) MenuActions.categoryChange(parseInt(chgID));
        return;
      }
    }
  };

  render() {
    const {categories, selectedCategory, products} = this.props;
    return (
      <div>
        <CategoryList
          categories={categories}
          value={selectedCategory}
          onClick={this.handleClickCategory}
        />
        <MenuList products={products} categories={categories} onScroll={this.handleScroll}
                  onClick={this.handleClickMenu}/>
      </div>
    );
  }
}

const mapStateToProps = ({menu}) => ({
  selectedCategory: menu.selectedCategory,
  categories: menu.categories,
  products: menu.products
});

const mapDispatchToProps = dispatch => ({
  MenuActions: bindActionCreators(menuActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuContainer);
