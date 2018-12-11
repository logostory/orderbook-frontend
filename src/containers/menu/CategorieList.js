import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import NoSsr from '@material-ui/core/NoSsr';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    // maxWidth: 360,
    // width: 360,
  },
});

const CategorieList = ({
  classes, theme, categories, onClick, value,
}) => {
  const categorisList = categories.map(item => (
    <Tab
      component="a"
      key={item.categoryId}
      label={item.categoryName}
      href={`#tab_${item.categoryId}`}
      onClick={(e) => {
        // e.preventDefault();
        onClick(item.categoryId);
      }}
    />
  ));

  return (
    <div className={classes.root}>
      <NoSsr position="static" color="default">
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          fullWidth
          scrollable
          scrollButtons="off"
        >
          {categorisList}
        </Tabs>
      </NoSsr>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(CategorieList);
