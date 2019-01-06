import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import StringUtils from 'utils/StringUtils';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

const styles = {
    optionList: {
        paddingTop: '0px',
        paddingBottom: '0px',
    },
    checkbox: {
        padding: '12px 16px 12px 0px',
        '&$checkbox': {
            color: '#757575',
        },
    },
    options: {
        padding: 0,
    },
    optionTitleText: {
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.5,
        letterSpacing: '0.2px',
        color: 'rgba(0, 0, 0, 0.87)',
    },
    optionPriceText: {
        fontFamily: 'Roboto',
        fontSize: '12px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.33,
        letterSpacing: '0.4px',
        textAlign: 'end',
        color: 'rgba(0, 0, 0, 0.87)',
    },
};

const OptionPaneItem = ({
    classes, checked, name, price, onChange,
}) => (
    <ListItem className={classes.optionList}>
        <Checkbox
            className={classes.checkbox}
            checked={checked}
            value={name}
            onChange={onChange}
        />
        <ListItemText
            className={classes.options}
            primary={(
                <Typography
                    className={classes.optionTitleText}
                    variant="subtitle1"
                >
                    {name}
                </Typography>
            )}
        />
        <ListItemText
            className={classes.options}
            primary={(
                <Typography
                    className={classes.optionPriceText}
                    variant="caption"
                >
                    {`${StringUtils.formatPrice(price)} won`}
                </Typography>
            )}
        />
    </ListItem>
);

export default withStyles(styles)(OptionPaneItem);
