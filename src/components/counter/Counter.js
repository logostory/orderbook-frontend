import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import red from '@material-ui/core/colors/red';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[800],
    },
  },
});


class Counter extends Component {
    state = {
        count: 0
    }

    addCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    substract = () => {
        if (this.state.count <= 0) return;
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes}>
                <Button variant="contained" color="primary" onClick={this.substract}>-</Button>
                <Paper>
                    <Typography variant="h5" component="h3">
                    Counter
                    </Typography>
                    <Typography component="p">
                    {this.state.count}
                    </Typography>
                </Paper>
                <Button variant="contained" color="primary" onClick={this.addCount}>+</Button>
            </div>
        );
    }
}

export default Counter;