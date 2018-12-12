import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

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
    Subtitle: {
        width: '100%',
        height: '48px',
        display: 'flex',
    },
    ExistCardName: {
        width: '80%',
    },
    caption: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '20%',
        fontFamily: 'Roboto',
        fontSize: '12px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.33',
        letterSpacing: '0.4px',
        textAlign: 'right',
        color: 'rgba(0, 0, 0, 0.87)',
    },
});

const Exist = ({ classes }) => {
    return (
        <Grid>
            <Grid className={classes['Rectangle-blank']} />
            <Grid className={classes['Rectangle-title']}>
                <Typography className={classes['Headline-6']}>Existing Accounts</Typography>
            </Grid>
            <Grid className={classes.Subtitle}>
                <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Visa Card"
                    className={classes.ExistCardName}
                />
                <Typography className={classes.caption}>3515</Typography>
            </Grid>
            <Grid className={classes.Subtitle}>
                <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Master Card"
                    className={classes.ExistCardName}
                />
                <Typography className={classes.caption}>5152</Typography>
            </Grid>
            <div className={classes['Rectangle-line']} />
        </Grid>
    );
};

export default withStyles(styles)(Exist);
