import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import * as util from 'lib/utils';

const styles = theme => ({
  item: {
		display: 'flex',
		fontSize: '1rem',
  },
  unitPrice: {
    fontSize: '1rem',
    marginLeft: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const CartOptionItem = ({classes, name, unitPrice}) => {
	return (
		<div className={classes.item}>
      <Typography variant="subtitle1">{name}</Typography>
      <Typography variant="display4" className={classes.unitPrice}>({util.priceFormat(unitPrice)}원)</Typography>
    </div>
	);
};

export default withStyles(styles)(CartOptionItem);