import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import StringUtils from 'utils/StringUtils';

import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import CloseIcon from '@material-ui/icons/Close';

import OptionPane from './OptionPane';

const styles = {
    closeBtn: {
        position: 'absolute',
        top: '12px',
        left: '12px',
        padding: 0,
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
        backgroundColor: '#3eafa2',
        color: '#ffffff',
    },
};

const MenuProfile = ({
    classes, onOpen, onClose, onOrder, Menu,
}) => {
    console.log('Menu Profile: ', Menu);

    if (Menu === null || Menu === undefined) return null;

    const {
        imagePath, name, options, price,
    } = Menu;
    const priceText = `${StringUtils.formatPrice(price)} won`;

    return (
        <React.Fragment>
            <Dialog open={onOpen} style={{ backgroundColor: 'none' }}>
                <IconButton className={classes.closeBtn} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
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
                    <OptionPane options={options} menuPrice={price} />
                </List>
                <Button variant="contained" className={classes.button} onClick={() => onOrder(Menu)}>
                    ADD TO ORDER
                </Button>
            </Dialog>
        </React.Fragment>
    );
};

MenuProfile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuProfile);
