import React from 'react';
import { connect } from 'react-redux';
import CartList from 'components/Cart/CartList';
import { getItems, removeItemByIndex } from 'modules/Cart';

const CartContainer = ({
    menus,
    items,
    removeItemByIndex: handleItemRemove,
}) => (
    <div>
        <CartList
            menus={menus}
            items={items}
            removeItem={handleItemRemove}
        />
    </div>
);

const mapStateToProps = state => ({
    items: getItems(state),
    menus: state.menu.products, // menu 모듈이 아직 미완성
});

const mapDispatchToProps = {
    removeItemByIndex,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
