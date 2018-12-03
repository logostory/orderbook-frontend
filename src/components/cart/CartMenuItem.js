import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  margin0: {
    margin: 0
  }
})

class CartMenuItem extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        CartMenuItem
      </div>
    );
  }
}


export default withStyles(styles)(CartMenuItem);
