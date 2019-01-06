import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import OptionPaneItem from 'components/MenuDialog/OptionPaneItem';
import StringUtils from 'utils/StringUtils';

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

    list: {
        paddingTop: '2px',
        paddingBottom: '2px',
        overflow: 'auto',
        maxHeight: '173px',
    },
    footer: {
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: '#ffffff',
    },
    footerText: {
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.5,
        letterSpacing: '0.2px',
        textAlign: 'end',
        color: '#3eafa2',
        width: '110px',
    },
};

const OptionPane = ({
    classes, mappedOptions, subtotal, onOptionChange,
}) => (
    <React.Fragment>
        {mappedOptions === undefined || mappedOptions === null ? <ListItem />
            : (
                <React.Fragment>
                    {mappedOptions.map(({
                        name, price, optionId, checked,
                    }) => (
                        <OptionPaneItem
                            checked={checked}
                            name={name}
                            price={price}
                            onChange={() => onOptionChange(optionId)}
                        />
                    ))}
                </React.Fragment>
            )
        }
        <Divider />
        <List className={classes.list}>
            <ListItem className={classes.footer}>
                <Typography className={classes.footerText} variant="subtitle1">
                    Subtotal
                </Typography>
                <Typography className={classes.footerText} variant="subtitle1">
                    {`${StringUtils.formatPrice(subtotal)} won`}
                </Typography>
            </ListItem>
        </List>
    </React.Fragment>
);

export default withStyles(styles)(OptionPane);
