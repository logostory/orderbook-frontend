import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import StringUtils from 'utils/StringUtils';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

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

class OptionPane extends Component {
    state = {
        chosenOptions: [],
        subtotal: 0,
    }

    componentDidMount() {
        this.calculateSubtotal();
    }

    calculateSubtotal() {
        const { options, menuPrice } = this.props;
        const { chosenOptions } = this.state;
        let subtotal = menuPrice;
        options.forEach(({ optionId, price }) => {
            if (chosenOptions.includes(optionId)) { subtotal += price; }
        });
        this.setState({ subtotal });
    }

    handleChange(optionId) {
        const { chosenOptions } = this.state;
        let nextVal = chosenOptions.slice();

        if (chosenOptions.includes(optionId)) {
            nextVal = chosenOptions.filter(chosenOption => chosenOption !== optionId);
        } else {
            nextVal.push(optionId);
        }
        this.setState(
            { chosenOptions: nextVal },
            () => this.calculateSubtotal(),
        );
    }

    render() {
        const { classes, options } = this.props;
        const { chosenOptions, subtotal } = this.state;
        return (
            <React.Fragment>
                {options === undefined || options === null ? <ListItem />
                    : (
                        <React.Fragment>
                            {options.map(({ name, price, optionId }) => (
                                <ListItem className={classes.optionList}>
                                    <Checkbox
                                        className={classes.checkbox}
                                        checked={chosenOptions.includes(optionId)}
                                        value={optionId}
                                        onChange={() => this.handleChange(optionId)}
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
                            ))}
                        </React.Fragment>
                    )
                }
                <Divider />
                <List className={classes.list}>
                    <ListItem className={classes.footer}>
                        <Typography className={classes.footerText} variant="subtitle1">Subtotal</Typography>
                        <Typography className={classes.footerText} variant="subtitle1">
                            {`${StringUtils.formatPrice(subtotal)} won`}
                        </Typography>
                    </ListItem>
                </List>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(OptionPane);
