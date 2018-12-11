import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import * as util from 'utils/utils';


// eslint-disable-next-line no-unused-vars
const styles = theme => ({
    'Food-Main': {
        display: 'flex',
        // width: '360px',
        height: '36px',
        objectFit: 'contain',
    },
    'Headline-6': {
        width: '80%',
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
    caption: {
        width: '20%',
        height: '16px',
        fontFamily: 'Roboto',
        fontSize: '12px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.33',
        letterSpacing: '0.4px',
        textAlign: 'right',
        color: 'rgba(0, 0, 0, 0.6)',
    },
});

const CartMenuItem = ({ classes, name, unitPrice }) => (
    <div className={classes['Food-Main']}>
        <Typography component="span" className={classes['Headline-6']}>{name}</Typography>
        <Typography component="span" variant="display4" className={classes.caption}>
            { `${util.priceFormat(unitPrice)} won` }
        </Typography>
    </div>
);

export default withStyles(styles)(CartMenuItem);
