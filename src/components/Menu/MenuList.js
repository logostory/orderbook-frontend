import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import Menu from './Menu';

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        overflow: 'auto',
        height: '100%',
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
        textAlign: 'left',
    },
    ListSubheader: {
        height: 48,
    },
    subheaderText: {
        marginTop: 12,
        marginBottom: 12,
        fontSize: 16,
        lineHeight: 1.5,
        letterSpacing: 0.2,
        color: 'rgba(0, 0, 0, 0.87)',
    },
});

const MenuList = ({
    classes, products, categories, onScroll, onClick,
}) => (
    <React.Fragment>
        <List
            className={classes.root}
            subheader={<li />}
            dense
            onScroll={e => onScroll(e)}
        >
            {categories.map(({ categoryId, categoryName }) => (
                <li
                    key={categoryId}
                    className={classes.listSection}
                    id={`tab_${categoryId}`}
                >
                    <ul className={classes.ul}>
                        <ListSubheader
                            className={classes.ListSubheader}
                            disableSticky
                        >
                            <span className={classes.subheaderText}>{categoryName}</span>
                        </ListSubheader>
                        {products
                            .filter(item => item.categoryId === categoryId)
                            .map(item => (
                                <Menu
                                    product={item}
                                    key={item.menuId}
                                    onClick={onClick}
                                />
                            ))}
                    </ul>
                </li>
            ))}
        </List>
    </React.Fragment>
);

export default withStyles(styles, { withTheme: true })(MenuList);
