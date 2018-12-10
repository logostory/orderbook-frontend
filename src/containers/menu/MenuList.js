import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import Menu from './Menu';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
    textAlign: 'left',
    // textSize: 20, ??
  },
});

const MenuList = ({ classes, products, categories }) => (
  <List className={classes.root} subheader={<li />}>
    {categories.map(categorie => (
      <li key={categorie.categoryId} className={classes.listSection}>
        <ul className={classes.ul}>
          <ListSubheader>{categorie.categoryName}</ListSubheader>
          {products
            .filter(item => item.categoryId === categorie.categoryId)
            .map(item => (
              <Menu product={item} key={item.productId} />
            ))}
        </ul>
      </li>
    ))}
  </List>
);

export default withStyles(styles)(MenuList);
