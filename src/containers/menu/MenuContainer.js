import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuActions from 'modules/menu';
import { StickyContainer, Sticky } from 'react-sticky';
import CategoryList from 'components/Category';
import { MenuList } from 'components/Menu';
import StoreProfile from 'components/StoreProfile';
import MenuDialogContainer from 'containers/menu/MenuDialogContainer';
import Image from '../../Assets/logostory.jpg';

class MenuContainer extends Component {
    state = {
        dialogOpen: false,
        selectedMenu: null,
    };

    handleClickCategory = (value) => {
        const { MenuActions } = this.props;
        MenuActions.changeSelectedCategory(value);
    };

    handleClickMenu = (menuId) => {
        const mappedMenu = this.mapMenu(menuId);

        this.setState({ selectedMenu: mappedMenu });
        this.toggleDialog();
    };

    toggleDialog = () => {
        const { dialogOpen } = this.state;
        this.setState({ dialogOpen: !dialogOpen });
    }

    mapMenu = (menuId) => {
        const { products } = this.props;

        return products.find(product => product.menuId === menuId);
    }

    /*
        함수형으로 바꿔야
    */
    handleScroll = (e) => {
        const children = e.target.childNodes;
        const { selectedCategory, MenuActions } = this.props;
        for (let i = 0, height = 0; i < children.length; i++) {
            if (children[i].id === '') continue;
            height += children[i].scrollHeight;
            if (e.target.scrollTop < height) {
                const [, chgID] = children[i].id.split('_');
                if (chgID !== selectedCategory) {
                    MenuActions.categoryChange(
                        parseInt(chgID, 10), // 10진수
                    );
                }
                return;
            }
        }
    };

    render() {
        const {
            categories, selectedCategory, products, showFooter, shopImagePath, shopName, seatId,
        } = this.props;
        const { dialogOpen, selectedMenu } = this.state;

        const topMargin = 56;
        return (
            <div style={showFooter ? containerStyleWithFooter : containerStyle}>
                <StoreProfile
                    Image={shopImagePath || Image}
                    Table={`TABLE ${seatId || ''}`}
                    Title={shopName}
                />
                <MenuDialogContainer
                    selectedMenu={selectedMenu}
                    dialogOpen={dialogOpen}
                    onClose={this.toggleDialog}
                />
                <StickyContainer>
                    <Sticky topOffset={topMargin * -1}>
                        {({
                            style,
                            isSticky,
                        }) => (
                            <CategoryList
                                style={{
                                    ...style,
                                    marginTop: isSticky ? `${topMargin}px` : '0px',
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
    height: `calc(100vh - ${/mobile/i.test(navigator.userAgent) ? 75 : 0}px)`,
    overflow: 'auto',
};

const containerStyleWithFooter = {
    height: `calc(100vh - ${/mobile/i.test(navigator.userAgent) ? 175 : 100}px)`,
    overflow: 'auto',
};

const mapStateToProps = ({ menu }) => ({
    seatId: menu.seatId,
    shopName: menu.shopName,
    shopImagePath: menu.shopImagePath,
    selectedCategory: menu.selectedCategory,
    categories: menu.categories,
    products: menu.products,
});

const mapDispatchToProps = dispatch => ({
    MenuActions: bindActionCreators(menuActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MenuContainer);
