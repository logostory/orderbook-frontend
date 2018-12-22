import React from 'react';
import {Button, Grid, Typography} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
    root: {
        position: 'absolute',
        width: '100%',
        bottom: '100px',
        display: 'flex',
        flexFlow: 'column',
        padding: '0 2rem',
        [`@media screen and (max-width: 360px) and  (orientation: portrait)`]: {
            width: '360px',
        },
    },
    button: {
        marginTop: '12px',
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
});



class OrderConfirm extends React.Component {

    render() {
        const { classes, handleClickConfirm, handleClickAbout } = this.props;

        return (
            <Grid container className={classes.root}>
                <Grid>
                    <Typography>Your order number is:</Typography>
                    <Typography>A21</Typography>
                </Grid>
                <Grid>
                    <Typography>Please wait while your</Typography>
                    <Typography>meal is being prepared.</Typography>
                </Grid>
                <Button classes={{
                    root: classes.button
                }} onClick={handleClickAbout}>LEARN MORE ABOUT US</Button>
                <Button classes={{
                    root: classes.button
                }} onClick={handleClickConfirm}>CONFIRM</Button>
            </Grid>
        );
    }
};

export default withStyles(styles)(OrderConfirm);