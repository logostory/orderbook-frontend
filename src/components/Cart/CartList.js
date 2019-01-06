import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import CartMenuItem from './CartMenuItem';

const styles = () => ({
    root: {
        flexGrow: 1,
        display: 'block',
        height: `calc(100vh - 100px - ${/mobile/i.test(navigator.userAgent) ? 75 : 0}px)`,
        '@media screen and (max-width: 360px) and  (orientation: portrait)': {
            width: '360px',
        },
        overflow: 'auto',
        '-webkit-overflow-scrolling': 'touch',
    },
});

const CartList = ({
    classes, items, menus, removeItem,
}) => (
    <Grid container className={classes.root}>
        {items.map((item, index) => {
            const { menuId, options: chosenOptions } = item;

            const mappedItem = menus.find(menu => menu.menuId === menuId);
            const {
                name: menuName,
                price: menuPrice,
                options: menuOptions,
            } = mappedItem;

            const mappedOptions = chosenOptions.map(
                chosenOptionId => menuOptions.find(
                    menuOption => menuOption.optionId === chosenOptionId,
                ),
            );

            return (
                <CartMenuItem
                    menuName={menuName}
                    menuPrice={menuPrice}
                    options={mappedOptions}
                    key={menuId}
                    index={index}
                    removeItem={() => removeItem(index)}
                />
            );
        })}
    </Grid>
);

export default withStyles(styles)(CartList);
