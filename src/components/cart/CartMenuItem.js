import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import * as util from '../../utils/utils';

const styles = theme => ({
  item: {
    display: 'flex',
  },
  unitPrice: {
    fontSize: '1rem',
    marginLeft: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});



const CartMenuItem = ({classes, name, unitPrice}) => {
  return (
    <div className={classes.item}>
      <Typography component="h2" variant="h4">{name}</Typography>
      <Typography variant="display4" className={classes.unitPrice}>({util.priceFormat(unitPrice)}원)</Typography>
    </div>
  );
}

export default withStyles(styles)(CartMenuItem);