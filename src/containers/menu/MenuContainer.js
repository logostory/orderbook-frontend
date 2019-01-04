import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuActions from 'modules/menu';
import { StickyContainer, Sticky } from 'react-sticky';
import { CategoryList } from 'components/Category';
import { MenuList } from 'components/Menu';
import MenuProfile from 'components/MenuProfile';
import StoreProfile from 'components/StoreProfile';
import Image from '../../Assets/logostory.jpg';

class MenuContainer extends Component {
    handleClickCategory = (value) => {
        const { MenuActions } = this.props;
        MenuActions.changeSelectedCategory(value);
    };

    // @Leo 매뉴 클릭 함수
    handleClickMenu = (menuId) => {
        const { MenuActions } = this.props;
        MenuActions.clickManu(menuId);
    };

    handleScroll = (e) => {
        const children = e.target.childNodes;
        const { selectedCategory, MenuActions } = this.props;
        for (let i = 0, height = 0, chgID; i < children.length; i++) {
            if (children[i].id === '') continue;
            height += children[i].scrollHeight;
            if (e.target.scrollTop < height) {
                chgID = children[i].id.split('_')[1];
                if (chgID !== selectedCategory) {
                    MenuActions.categoryChange(
                        parseInt(chgID),
                    );
                }
                return;
            }
        }
    };

    handleClickClose = () => {
        const { MenuActions } = this.props;
        MenuActions.clickClose();
    };

    handleAddToOrder = (menuId) => {
        const { MenuActions } = this.props;
        MenuActions.addToOrder(menuId);
    };

    render() {
        const {
            openDig, categories, selectedCategory, products, selectedMenu,
        } = this.props;
        // console.log(selectedMenu);

        return (
            <div style={containerStyle}>

                <StoreProfile
                    Image={Image}
                    Table="TABLE 17"
                    Title="The Burgur Co"
                />
                <MenuProfile
                    Menu={selectedMenu}
                    onOpen={openDig}
                    onClose={this.handleClickClose}
                    onOrder={this.handleAddToOrder}
                />
                <StickyContainer>
                    <Sticky topOffset={-76}>
                        {({
                            style,
                            isSticky,
                        }) => (
                            <CategoryList
                                style={{
                                    ...style,
                                    marginTop: isSticky ? '76px' : '0px',
                                }}
                                categories={categories}
                                value={selectedCategory}
                                onClick={this.handleClickCategory}
                            />
                        )}
                    </Sticky>
                    <MenuList
                        products={products}
                        categories={categories}
                        onScroll={this.handleScroll}
                        onClick={this.handleClickMenu}
                    />
                </StickyContainer>
            </div>

        );
    }
}

const containerStyle = {
    height: window.screen.height,
    maxHeight: window.screen.height,
    overflow: 'auto',
};

const mapStateToProps = ({ menu }) => ({
    openDig: menu.openDig,
    selectedCategory: menu.selectedCategory,
    categories: menu.categories,
    products: menu.products,
    selectedMenu: menu.selectedMenu,
});

const mapDispatchToProps = dispatch => ({
    MenuActions: bindActionCreators(menuActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MenuContainer);
