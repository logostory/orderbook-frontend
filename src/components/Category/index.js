import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import NoSsr from '@material-ui/core/NoSsr';

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        zIndex: 2,
    },
    tabs: {
        backgroundColor: '#3eafa2',
    },
    tabsColor: {
        color: '#3eafa2',
    },
    tabBtn: {
        minWidth: 120,
        width: 120,
        height: 48,
    },
});

const CategoryList = ({
    classes, categories, onClick, value, style,
}) => {
    const categoryList = categories.map(({ categoryId, categoryName }) => (
        <Tab
            className={classes.tabBtn}
            component="a"
            key={categoryId}
            label={categoryName}
            href={`#tab_${categoryId}`}
            onClick={(e) => {
                e.preventDefault();
                onClick(categoryId);
            }}
            classes={{ selected: classes.tabsColor }}
        />
    ));

    return (
        <div className={classes.root} style={style}>
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

export default withStyles(styles, { withTheme: true })(CategoryList);
