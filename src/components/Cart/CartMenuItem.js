import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import StringUtils from 'utils/StringUtils';
import RemoveSvg from 'Assets/svg/custom_icon_remove.svg';
import CartOptionItem from './CartOptionItem';

const styles = () => ({
    product: {
        padding: '0 16px',
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
    hidden: {
        visibility: 'hidden',
        opacity: 0,
        backgroundColor: '#ECEFF1',
        boxShadow: '0px 7px 3px #CFD8DC',
        transition: 'visibility 0s 0.25s, opacity 0.25s linear',
    },
});

const CartMenuItem = ({
    classes, menuName, menuPrice, options, removeItem, index,
}) => {
    const cartOptionItems = options.map(({ name, price }) => (
        <CartOptionItem
            name={name}
            price={price}
            key={name}
        />
    ));

    const handleAnimation = (idkey) => {
        const elem = document.querySelector(`#CartMenu${idkey}`);
        elem.classList.add(classes.hidden);
        setTimeout(() => {
            removeItem();
            elem.classList.remove(classes.hidden);
        }, 250);
    };

    return (
        <Grid id={`CartMenu${index}`} key={index} component="div" className={classes.product}>
            <Grid component="div" className={classes.Remove}>
                <Typography component="span" className={classes.RemoveCaption}>Remove this order</Typography>
                <Typography component="span" variant="h5" className={classes.Times} onClick={() => handleAnimation(`${index}`)}>
                    <img src={`${RemoveSvg}`} alt="Remove" />
                </Typography>
            </Grid>
            <div className={classes['Food-Main']} key={index}>
                <Typography component="span" className={classes['Headline-6']}>{menuName}</Typography>
                <Typography component="span" variant="display4" className={classes.caption}>
                    { `${StringUtils.formatPrice(menuPrice)} won` }
                </Typography>
            </div>
            {cartOptionItems}
            <div className={classes['Rectangle-13']} />
        </Grid>
    );
};

export default withStyles(styles)(CartMenuItem);
