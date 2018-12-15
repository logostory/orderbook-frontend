/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

// eslint-disable-next-line no-unused-vars
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
    checked: {
        '&$checked': {
            color: '#757575',
        },
    },
});

class Exist extends Component {
    // state = {}

    // handleChecked = name => e => {
    //     this.setState({ [name]: e.target.checked });
    // }

    render() {
        const { classes } = this.props;
        // const { check1 } = this.state;
        return (
            <Grid>
                <Grid className={classes['Rectangle-blank']} />
                <Grid className={classes['Rectangle-title']}>
                    <Typography className={classes['Headline-6']}>Existing Accounts</Typography>
                </Grid>
                <Grid className={classes.Subtitle}>
                    <FormControlLabel
                        control={<Checkbox classes={{ checked: classes.checked }} />}
                        label="Visa Card"
                        className={classes.ExistCardName}
                    />
                    <Typography className={classes.caption}>3515</Typography>
                </Grid>
                <Grid className={classes.Subtitle}>
                    <FormControlLabel
                        control={<Checkbox classes={{ checked: classes.checked }} />}
                        label="Master Card"
                        className={classes.ExistCardName}
                    />
                    <Typography className={classes.caption}>5152</Typography>
                </Grid>
                <div className={classes['Rectangle-line']} />
            </Grid>
        );
    }
}

export default withStyles(styles)(Exist);
