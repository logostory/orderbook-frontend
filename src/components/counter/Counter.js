import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Counter extends Component {
    state = {
        id: this.props.id,
        productName: this.props.name,
        count: 1,
        error: false,
    }

    increamentCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decreamentCount = () => {
        if (this.state.count <= 0) return;
        this.setState({
            count: this.state.count - 1
        })
    }


    render() {
        return (
            <div>
                    <AppBar position="static" color="default">
                        <Typography variant="h6" color="inherit">
                            <Toolbar>
                            <Button variant="contained" color="primary" onClick={this.decreamentCount}>-</Button>
                                상품 : {this.props.product.name} 수량 : {this.state.count}
                            <Button variant="contained" color="primary" onClick={this.increamentCount}>+</Button>
                            </Toolbar>
                        </Typography>
                    </AppBar>
            </div>
        );
    }
}

export default Counter;