import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import filled from 'Assets/svg/filled.svg';

const styles = theme => ({
    'Rectangle-blank': {
        width: '100%',
        height: '48px',
    },
    'Rectangle-title': {
        width: '100%',
        height: '36px',
        display: 'flex',
        alignItems: 'center',
    },
    'Rectangle-items': {
        width: '100%',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
    },
    'Rectangle-line': {
        width: '100%',
        height: '1px',
        opacity: '0.12',
        backgroundColor: '#000000',
    },
    'Headline-6': {
        width: '240px',
        height: '24px',
        fontFamily: 'Roboto',
        fontSize: '20px',
        fontWeight: '500',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: '0.3px',
        color: 'rgba(0, 0, 0, 0.87)',
    },
    'Subtitle-1': {
        width: '80%',
        height: '24px',
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.5',
        letterSpacing: '0.2px',
        color: 'rgba(0, 0, 0, 0.87)',
    },
    filled: {
        width: '20%',
        display: 'inline-flex',
        justifyContent: 'flex-end',
    }
});

const AddNew = ({ classes }) => {
    return (
        <Grid>
            <Grid className={classes['Rectangle-blank']} />
            <Grid className={classes['Rectangle-title']}>
                <Typography className={classes['Headline-6']}>Add New Account</Typography>
            </Grid>
            <Grid className={classes['Rectangle-items']}>
                <Typography className={classes['Subtitle-1']}>Credit Card</Typography>
                <Grid className={classes.filled}><img src={`${filled}`} alt="" /></Grid>
            </Grid>
            <Grid className={classes['Rectangle-items']}>
                <Typography className={classes['Subtitle-1']}>Kakao Pay</Typography>
                <Grid className={classes.filled}><img src={`${filled}`} alt="" /></Grid>
            </Grid>
            <Grid className={classes['Rectangle-items']}>
                <Typography className={classes['Subtitle-1']}>Mobile Phone</Typography>
                <Grid className={classes.filled}><img src={`${filled}`} alt="" /></Grid>
            </Grid>
            <div className={classes['Rectangle-line']} />
        </Grid>
    );
};

export default withStyles(styles)(AddNew);
