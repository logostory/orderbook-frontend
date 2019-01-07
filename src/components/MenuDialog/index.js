import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import StringUtils from 'utils/StringUtils';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import OptionPane from './OptionPane';

const styles = {
    title: {
        padding: 14,
        margin: '0 auto',
        width: '240px',
        height: '24px',
        fontFamily: 'Roboto',
        fontSize: '20px',
        fontWeight: '700',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: '0.3px',
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.87)',
    },
    image: {
        height: '183px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
    },
    list: {
        paddingTop: '2px',
        paddingBottom: '2px',
        overflow: 'auto',
        maxHeight: '173px',
    },
    menu: {
        display: 'flex',
        alignItems: 'baseline',
    },
    menuDescription: {
        width: '220px',
    },
    menuTitle: {
        fontFamily: 'Roboto',
        fontSize: '20px',
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: '0.3px',
        color: 'rgba(0, 0, 0, 0.87)',
    },
    menuDetail: {
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.43,
        letterSpacing: '0.3px',
        color: 'rgba(0, 0, 0, 0.6)',
    },
    menuPrice: {
        width: '70px',
        padding: 0,
        float: 'right',
    },
    menuPriceText: {
        fontFamily: 'Roboto',
        fontSize: '12px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.33,
        letterSpacing: '0.4px',
        textAlign: 'end',
        color: 'rgba(0, 0, 0, 0.6)',
    },
    button: {
        color: '#3eafa2',
        height: '16px',
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight: '500',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.14',
        letterSpacing: '1.3px',
    },
};

const MenuDialog = ({
    classes,
    open,
    onClose,
    addToCart,
    handleOptionChange,
    menu,
    mappedOptions,
    subtotal,
}) => {
    const { imagePath, name, price } = menu;
    const priceText = `${StringUtils.formatPrice(price)} won`;

    return (
        <React.Fragment>
            <Dialog open={open} style={{ backgroundColor: 'none' }}>
                <DialogTitle className={classes.title}>Menu Detail</DialogTitle>
                <div className={classes.image} style={{ backgroundImage: `url(${imagePath})` }} />
                <List className={classes.list}>
                    <ListItem className={classes.menu}>
                        <ListItemText
                            className={classes.menuDescription}
                            primary={<Typography className={classes.menuTitle} variant="h6">{name}</Typography>}
                            secondary={<Typography className={classes.menuDetail} variant="body2">{name}</Typography>}
                        />
                        <ListItemText
                            className={classes.menuPrice}
                            primary={(
                                <Typography className={classes.menuPriceText} variant="caption">
                                    {priceText}
                                </Typography>
                            )}
                        />
                    </ListItem>
                </List>
                <Divider />
                <List className={classes.list}>
                    <OptionPane
                        mappedOptions={mappedOptions}
                        subtotal={subtotal}
                        onOptionChange={handleOptionChange}
                    />
                </List>
                <DialogActions>
                    <Button className={classes.button} onClick={onClose}>CANCEL</Button>
                    <Button className={classes.button} onClick={() => addToCart()}>ADD TO CART</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};

export default withStyles(styles)(MenuDialog);
