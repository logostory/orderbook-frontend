import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import NoSsr from '@material-ui/core/NoSsr';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    backgroundColor: '#3eafa2',
  },
  tabsColor: {
    color: '#3eafa2'
  },
  tabBtn: {
    minWidth: 120,
    width: 120,
    height: 48
  }
});

const CategoryList = ({
                        classes, theme, categories, onClick, value,
                      }) => {
  const categoryList = categories.map(item => (
    <Tab
      className={classes.tabBtn}
      component="a"
      key={item.categoryId}
      label={item.categoryName}
      href={`#tab_${item.categoryId}`}
      onClick={() => {
        onClick(item.categoryId);
      }}
    />
  ));

  return (
    <div className={classes.root}>
      <NoSsr>
        <Tabs
          classes={{
            indicator: classes.tabs,
          }}
          value={value}
          fullWidth
          scrollable
          scrollButtons="off"
        >
          {categoryList}
        </Tabs>
      </NoSsr>
    </div>
  );
};

export default withStyles(styles, {withTheme: true})(CategoryList);
