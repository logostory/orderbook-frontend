import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import * as util from 'utils/utils';
import RemoveSvg from 'Assets/svg/custom_icon_remove.svg';
import CartOptionItem from './CartOptionItem';

// eslint-disable-next-line no-unused-vars
const styles = theme => ({
    product: {
        width: '100%',
        // border: '1px solid red',
    },
    Remove: {
        display: 'flex',
        width: '100%',
        height: '48px',
        objectFit: 'contain',
        alignItems: 'right',
        justifyContent: 'flex-end',
        // border: '1px solid blue',
    },
    Times: {
        marginTop: '12px',
        color: '#3eafa2',
        cursor: 'pointer',
        textAlign: 'center',
        width: '20px',
        height: '20px',
        // border: '1px solid #3eafa2',
    },
    RemoveCaption: {
        marginTop: '19px',
        paddingRight: '4px',
        height: '16px',
        fontFamily: 'Roboto',
        fontSize: '12px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.33',
        letterSpacing: '0.4px',
        textAlign: 'right',
        color: '#3eafa2',
        // border: '1px solid gray',
    },
    'Rectangle-13': {
        height: '1px',
        opacity: '0.12',
        backgroundColor: '#000000',
    },
    'Food-Main': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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

const CartMenuItem = ({ classes, name, unitPrice, key, CartActions, options = [] }) => {
    const OptionList = options.map((option, optKey) => {
        return (
            <CartOptionItem
                name={option.name}
                unitPrice={option.unitPrice}
                key={optKey}
            />
        );
    });

    return (
        <Grid key={key} component="div" className={classes.product}>
            <Grid component="div" className={classes.Remove}>
                <Typography component="span" className={classes.RemoveCaption}>Remove this order</Typography>
                <Typography component="span" variant="h5" className={classes.Times} onClick={() => CartActions.itemRemove({ itemKey: `${key}` })}>
                    <img src={`${RemoveSvg}`} alt="Remove" />
                </Typography>
            </Grid>
            <div className={classes['Food-Main']} key={key}>
                <Typography component="span" className={classes['Headline-6']}>{name}</Typography>
                <Typography component="span" variant="display4" className={classes.caption}>
                    { `${util.priceFormat(unitPrice)} won` }
                </Typography>
            </div>
            { OptionList }
            <div className={classes['Rectangle-13']} />
        </Grid>
    );
};

export default withStyles(styles)(CartMenuItem);
