import React from 'react';
import {
    Button, AppBar, Grid, Typography,
} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import standingCopy from 'Assets/svg/standing-copy.svg';


const styles = () => ({
    root: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'space between',
        flexDirection: 'column',
    },
    header: {
        width: '100%',
        height: '56px',
        backgroundColor: '#ff4a5b',
        textAlign: 'center',
        paddingTop: '17px',
    },
    contents: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        height: '108px',
        padding: '16px',
    },
    aboutButton: {
        width: '100%',
        height: '48px',
        color: '#ff4a5b',
        backgroundColor: 'c',
        '&:hover': {
            backgroundColor: '#ffffff',
        },
        '&:active': {
            backgroundColor: '#ffffff',
        },
        marginBottom: '12px',
        borderColor: '#ff4a5b',
    },
    confirmButton: {
        width: '100%',
        height: '48px',
        color: 'white',
        backgroundColor: '#ff4a5b',
        '&:hover': {
            backgroundColor: '#ff4a5b',
        },
        '&:active': {
            backgroundColor: '#ff4a5b',
        },
    },
    titleText: {
        fontFamily: 'Roboto',
        fontSize: '20px',
        fontWeight: '500',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: '0.3px',
        textAlign: 'center',
        color: '#ffffff',
    },
    numberText: {
        fontFamily: 'Roboto',
        fontSize: '48px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.87)',
    },
    text: {
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.5',
        letterSpacing: '0.2px',
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.6)',
    },
    img: {
        width: '100px',
        height: '140px',
        objectFit: 'contain',
        marginBottom: '24px',
    },
});

const OrderConfirm = ({
    classes, handleClickConfirm, handleClickAbout, orderNumber,
}) => (
    <div className={classes.root}>
        <AppBar position="static" className={classes.header}>
            <Typography className={classes.titleText}>Done !</Typography>
        </AppBar>
        <Grid className={classes.contents}>
            <Typography className={classes.text}>Your order number is:</Typography>
            <Typography className={classes.numberText}>{orderNumber}</Typography>
            <img className={classes.img} src={`${standingCopy}`} alt="" />
            <Typography className={classes.text}>Please wait while your</Typography>
            <Typography className={classes.text}>meal is being prepared.</Typography>
        </Grid>
        <Grid className={classes.buttons}>
            <Button className={classes.aboutButton} variant="outlined" onClick={handleClickAbout}>LEARN MORE ABOUT US</Button>
            <Button className={classes.confirmButton} onClick={handleClickConfirm}>CONFIRM</Button>
        </Grid>
    </div>
);

export default withStyles(styles)(OrderConfirm);
