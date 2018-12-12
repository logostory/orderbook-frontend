/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import Exist from 'components/payment/Exist';
import AddNew from 'components/payment/AddNew';

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: '0 16px',
        display: 'block',
        marginBottom: '100px',
        // border: '1px solid black',
    },
});

class PaymentContainer extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.root}>
                <Exist />
                <AddNew />
            </Grid>
        );
    }
}

export default withStyles(styles)(PaymentContainer);
