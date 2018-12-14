/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import Exist from './Exist';
import AddNew from './AddNew';

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: '0 16px',
        display: 'block',
        height: `calc(100vh - 136px - ${/mobile/i.test(navigator.userAgent) ? 75 : 0}px)`,
        [`@media screen and (max-width: 360px) and  (orientation: portrait)`]: {
            width: '360px',
        },
        overflow: 'auto',
        '-webkit-overflow-scrolling': 'touch',
        // border: '1px solid black',
    },
});

const Payment = ({ classes }) => {
    return (
        <Grid container className={classes.root}>
            <Exist />
            <AddNew />
        </Grid>
    );
};

export default withStyles(styles)(Payment);
