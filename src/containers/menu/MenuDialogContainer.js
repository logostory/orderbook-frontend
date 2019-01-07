import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addItem, calcSubtotalPrice } from 'modules/Cart';
import * as menuActions from 'modules/menu';
import MenuDialog from 'components/MenuDialog';

const initialState = {
    chosenOptions: [],
    subtotal: 0,
};

class MenuDialogContainer extends Component {
    state = initialState;

    componentDidUpdate(prevProps) {
        const { dialogOpen: prevOpen } = prevProps;
        const { dialogOpen: nextOpen } = this.props;

        if (prevOpen === false && nextOpen === true) {
            this.calculateSubtotal();
        }
    }

    handleAddItemToCart = (menuId) => {
        const { addItem } = this.props;
        const { chosenOptions } = this.state;

        addItem({
            menuId,
            options: chosenOptions,
        });

        this.handleClose();
    }

    handleClose = () => {
        const { onClose } = this.props;
        onClose();

        this.initializeState();
    };

    handleOptionChange = (optionId) => {
        const { chosenOptions } = this.state;
        let nextVal = chosenOptions.slice();

        if (chosenOptions.includes(optionId)) {
            nextVal = chosenOptions.filter(chosenOption => chosenOption !== optionId);
        } else {
            nextVal.push(optionId);
        }

        this.setState(
            { chosenOptions: nextVal },
            () => this.calculateSubtotal(),
        );
    }

    calculateSubtotal = () => {
        const { selectedMenu } = this.props;
        const { chosenOptions } = this.state;
        const subtotal = calcSubtotalPrice(selectedMenu, chosenOptions);

        console.log(selectedMenu, chosenOptions, subtotal);

        this.setState({ subtotal });
    }

    initializeState() {
        this.setState(initialState);
    }

    mapOptions() {
        const { selectedMenu: { options: menuOptions } } = this.props;
        const { chosenOptions } = this.state;

        return menuOptions.map((menuOption) => {
            const checked = chosenOptions.includes(menuOption.optionId);
            const { name, price, optionId } = menuOption;

            return {
                name,
                price,
                optionId,
                checked,
            };
        });
    }

    render() {
        const { dialogOpen, selectedMenu } = this.props;
        if (selectedMenu === null || selectedMenu === undefined) { return null; }

        const { subtotal } = this.state;
        const mappedOptions = this.mapOptions();

        return (
            <MenuDialog
                open={dialogOpen}
                onClose={this.handleClose}
                addToCart={() => this.handleAddItemToCart(selectedMenu.menuId)}
                handleOptionChange={this.handleOptionChange}
                menu={selectedMenu}
                mappedOptions={mappedOptions}
                subtotal={subtotal}
            />
        );
    }
}

const mapDispatchToProps = dispatch => ({
    MenuActions: bindActionCreators(menuActions, dispatch),
    addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(MenuDialogContainer);
