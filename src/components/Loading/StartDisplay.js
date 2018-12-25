import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import {
    Fade, Grid, Typography, Button,
} from '@material-ui/core';

const styles = theme => ({
    root: {
        position: 'absolute',
        width: '100%',
        bottom: '100px',
        display: 'flex',
        flexFlow: 'column',
        padding: '0 2rem',
        '@media screen and (max-width: 360px) and  (orientation: portrait)': {
            width: '360px',
        },
    },
    'Take-a-picture-of-QR': {
        height: '72px',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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
    'Rectangle-13': {
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

const StartDisplay = ({ classes, handleClick }) => (
    <Fade in timeout={1500}>
        <Grid container className={classes.root}>
            <Grid className={classes['Take-a-picture-of-QR']}>
                <Typography>Take a picture of</Typography>
                <Typography>QR code by your</Typography>
                <Typography>table to start.</Typography>
            </Grid>
            <Button
                classes={{
                    root: classes['Rectangle-13'],
                }}
                onClick={handleClick}
            >
SCAN QR CODE
            </Button>
        </Grid>
    </Fade>
);

export default withStyles(styles)(StartDisplay);
