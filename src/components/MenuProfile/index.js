import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import CloseIcon from '@material-ui/icons/Close';


const styles = {
    closeBtn: {
        position: 'absolute',
        top: '12px',
        left: '12px',
        padding: 0,
    },
    image: {
        width: '324px',
        height: '183px',
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
    optionList: {
        paddingTop: '0px',
        paddingBottom: '0px',
    },
    checkbox: {
        padding: '12px 0px 12px 0px',
    },
    optionTitleText: {
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.5,
        letterSpacing: '0.2px',
        color: 'rgba(0, 0, 0, 0.87)',
    },
    optionPriceeText: {
        fontFamily: 'Roboto',
        fontSize: '12px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.33,
        letterSpacing: '0.4px',
        textAlign: 'end',
        color: 'rgba(0, 0, 0, 0.87)',
    },
    footer: {
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: '#ffffff',
    },
    footerText: {
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.5,
        letterSpacing: '0.2px',
        textAlign: 'end',
        color: '#3eafa2',
        width: '110px',
    },
    button: {
        backgroundColor: '#3eafa2',
        color: '#ffffff',
    },
};

const MenuProfile = ({
    classes, Image, Menu, Options,
}) => (
    <React.Fragment>
        <Dialog open="true" style={{ backgroundColor: 'none' }}>
            <IconButton className={classes.closeBtn}>
                <CloseIcon />
            </IconButton>
            <img className={classes.image} src={Image} alt="menu" />
            <List className={classes.list}>
                <ListItem className={classes.menu}>
                    <ListItemText
                        className={classes.menuDescription}
                        primary={<Typography className={classes.menuTitle} variant="h6">{Menu.Title}</Typography>}
                        secondary={<Typography className={classes.menuDetail} variant="body2">{Menu.Description}</Typography>}
                    />
                    <ListItemText
                        className={classes.menuPrice}
                        primary={(
                            <Typography className={classes.menuPriceText} variant="caption">
                                {Menu.Price}
                                {' '}
                                won
                            </Typography>
                        )}
                    />
                </ListItem>
            </List>
            <Divider />
            <List className={classes.list}>
                {Options.map(key => (
                    <ListItem className={classes.optionList}>
                        <Checkbox
                            className={classes.checkbox}
                            checked="false"
                        />
                        <ListItemText primary={<Typography className={classes.optionTitleText} variant="subtitle1">{key.title}</Typography>} />
                        <ListItemText primary={<Typography className={classes.optionPriceeText} variant="caption">{key.price}</Typography>} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List className={classes.list}>
                <ListItem className={classes.footer}>
                    <Typography className={classes.footerText} variant="subtitle1">Subtotal</Typography>
                    <Typography className={classes.footerText} variant="subtitle1">9,000 won</Typography>
                </ListItem>
            </List>
            <Button variant="contained" className={classes.button}>
                ADD TO ORDER
            </Button>
        </Dialog>
    </React.Fragment>
);

MenuProfile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuProfile);
