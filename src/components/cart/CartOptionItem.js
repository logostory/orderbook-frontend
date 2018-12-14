import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import * as util from 'utils/utils';

// eslint-disable-next-line no-unused-vars
const styles = theme => ({
    'Food-Option': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '36px',
        objectFit: 'contain',
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
        color: 'rgba(0, 0, 0, 0.6)',
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

const CartOptionItem = ({ classes, name, unitPrice }) => (
    <div className={classes['Food-Option']}>
        <Typography component="span" className={classes['Subtitle-1']}>
            {`+ ${name}`}
        </Typography>
        <Typography component="span" className={classes.caption}>
            {`${util.priceFormat(unitPrice)} won`}
        </Typography>
    </div>
);


export default withStyles(styles)(CartOptionItem);
