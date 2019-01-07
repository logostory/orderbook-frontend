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
            categories, selectedCategory, products, showFooter,
        } = this.props;
        const { dialogOpen, selectedMenu } = this.state;

        console.log('selectedMenu: ', selectedMenu);

        const topMargin = 56;
        return (
            <div style={containerStyle}>
                <StoreProfile
                    Image={Image}
                    Table="TABLE 17"
                    Title="The Burgur Co"
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
                        showFooter={showFooter}
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
