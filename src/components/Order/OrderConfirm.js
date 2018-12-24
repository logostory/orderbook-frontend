import React from 'react';
import {Button, AppBar, Grid, Typography} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import standingCopy from "Assets/svg/standing-copy.svg";

const styles = theme => ({
    root: {
        position: 'absolute',
        width: '100%',
        bottom: '16px',
        padding: '0 2rem',
    },
    appBar: {
        width: '100%',
        height: '56px',
        backgroundColor: '#ff4a5b',
        marginBottom: '58px'
    },
    title: {
        fontFamily: 'Roboto',
        fontSize: '20px',
        fontWeight: '500',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: '0.3px',
        textAlign: 'center',
        color: '#ffffff',
        marginTop: '15px',
        marginBottom: '17px'
    },
    order: {
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
    orderNumber: {
        fontFamily: 'Roboto',
        fontSize: '48px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.87)',
    },
    aboutBtn: {

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
        marginTop: '58px',
        marginLeft: '16px',
        marginRight: '16px'
    },
    button: {
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
        marginTop: '16px',
        marginLeft: '16px',
        marginRight: '16px',
        marginBottom: '16px',
    },
    img: {
        width: '100px',
        height: '140px',
        objectFit: 'contain',
        align: 'center',
        marginTop: '24px',
        marginBottom:' 24px'
    }
});



class OrderConfirm extends React.Component {

    render() {
        const { classes, handleClickConfirm, handleClickAbout, orderNumber } = this.props;

        return (
            <React.Fragment className={classes.root}>
                <AppBar position="static" className={classes.appBar}>
                    <Typography className={classes.title}>Done !</Typography>
                </AppBar>
                <Grid>
                    <Typography className={classes.order}>Your order number is:</Typography>
                    <Typography className={classes.orderNumber}>{orderNumber}</Typography>
                    <img className={classes.img} src={`${standingCopy}`} alt="" />
                </Grid>
                <Grid>
                    <Typography className={classes.order}>Please wait while your</Typography>
                    <Typography className={classes.order}>meal is being prepared.</Typography>
                </Grid>
                <Grid>
                    <Button variant="outlined" classes={{
                        root: classes.aboutBtn
                    }} onClick={handleClickAbout}>LEARN MORE ABOUT US</Button>
                    <Button classes={{
                        root: classes.button
                    }} onClick={handleClickConfirm}>CONFIRM</Button>
                </Grid>
            </React.Fragment>
        );
    }
};

export default withStyles(styles)(OrderConfirm);