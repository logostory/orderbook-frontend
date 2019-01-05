import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import * as util from 'utils/utils';

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
    optionPriceeText: {
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

class MenuDetail extends Component {
    state = {
        optionState: [],
    }

    componentWillMount() {
        const { options } = this.props;
        const { optionState } = this.state;

        const array = [];

        if (options !== undefined) {
            options.forEach((key) => {
                key.check = false;
                array.push(key);
            });

            this.setState({
                optionState: optionState.concat(array),
            });
            console.log('array:', array);
        }
    }

    handleChange(index) {
        const { optionState } = this.state;

        const newOptionState = optionState.slice();

        newOptionState[index].check = !optionState[index].check;
        this.setState({ optionState: newOptionState });
    }

    render() {
        const { classes, options } = this.props;
        const { optionState } = this.state;
        return (
            options !== undefined ? options.map((option, index) => (
                <ListItem className={classes.optionList}>
                    <Checkbox
                        className={classes.checkbox}
                        checked={optionState[index].check}
                        value={option}
                        onChange={() => this.handleChange(index)}
                    />
                    <ListItemText className={classes.options} primary={<Typography className={classes.optionTitleText} variant="subtitle1">{option.name}</Typography>} />
                    <ListItemText className={classes.options} primary={<Typography className={classes.optionPriceeText} variant="caption">{ `${util.priceFormat(option.price)} won`}</Typography>} />
                </ListItem>
            )) : <ListItem />
        );
    }
}

MenuDetail.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuDetail);
