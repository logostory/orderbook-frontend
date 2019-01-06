import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import StringUtils from 'utils/StringUtils';

const styles = () => ({
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

const CartOptionItem = ({ classes, name, price }) => (
    <div className={classes['Food-Option']}>
        <Typography component="span" className={classes['Subtitle-1']}>
            {`+ ${name}`}
        </Typography>
        <Typography component="span" className={classes.caption}>
            {`${StringUtils.formatPrice(price)} won`}
        </Typography>
    </div>
);

export default withStyles(styles)(CartOptionItem);
