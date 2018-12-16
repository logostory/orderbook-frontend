import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import CartMenuItem from './CartMenuItem';

const styles = theme => ({
    root: {
        flexGrow: 1,
        display: 'block',
        height: `calc(100vh - 136px - ${/mobile/i.test(navigator.userAgent) ? 75 : 0}px)`,
        [`@media screen and (max-width: 360px) and  (orientation: portrait)`]: {
            width: '360px',
        },
        overflow: 'auto',
        '-webkit-overflow-scrolling': 'touch',
        // border: '1px solid black',
    },
});

const CartList = ({ classes, menus, handleRemove }) => {
    return (
        <Grid container className={classes.root}>
            {
                menus.map((order, key) => {
                    const { options, name, unitPrice /* , amount */ } = order;
                    
                    return (
                        <CartMenuItem
                            name={name}
                            unitPrice={unitPrice}
                            options={options}
                            key={key}
                            index={key}
                            handleRemove={handleRemove}
                        />
                    );
                })
            }
        </Grid>
    );
};

export default withStyles(styles)(CartList);
