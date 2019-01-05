import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import StringUtils from 'utils/StringUtils';

const styles = () => ({
    ListItemLink: {
        padding: 0,
        height: 88,
    },
    avatar: {
        borderRadius: 0,
        width: 64,
        height: 64,
        marginRight: 16,
        marginLeft: 16,
        marginTop: 12,
        marginBottom: 12,
    },
    listTextArea: {
        margin: 0,
        padding: 0,
    },
    firstTextLine: {
        display: 'flex',
        width: '100%',
    },
    productName: {
        margin: 0,
        padding: 0,
        flex: 2,
        width: 'calc(100% - 80px)',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        height: 24,
        fontFamily: 'Roboto',
        lineHeight: 1.5,
        letterSpacing: 0.2,
        color: 'rgba(0, 0, 0, 0.87)',
        fontSize: 16,
    },
    price: {
        margin: 0,
        padding: 0,
        flex: 1,
        textAlign: 'right',
        width: '80px',
        height: 16,
        fontSize: 12,
        fontFamily: 'Roboto',
        lineHeight: 1.33,
        letterSpacing: 0.4,
        color: 'rgba(0,0,0,0.87)',
        marginTop: 5,
        marginBottom: 3,
    },
    secondTextLine: {
        display: 'inline-block',
        width: '100%',
        margin: 0,
        padding: 0,
    },
    menuComment: {
        margin: 0,
        padding: 0,
        fontSize: 14,
    },
});

const ListItemLink = props => (
    <ListItem
        button
        component="a"
        {...props}
        /* f#50 fix: zeplin  기준 right 16px */
        style={{ 'padding-right': 16 }}
    />
);

const Menu = ({ product, classes, onClick }) => {
    const {
        name, price, menuId, imagePath, comment,
    } = product;

    // 가격을 천 단위로 Comma 찍어서 반환하는 함수
    const priceWithCommas = StringUtils.formatPrice(price);

    return (
        <ListItemLink
            className={classes.ListItemLink}
            onClick={() => onClick(menuId)}
        >
            <ListItemAvatar>
                <Avatar
                    className={classes.avatar}
                    alt="Remy Sharp"
                    src={imagePath}
                />
            </ListItemAvatar>
            <ListItemText
                className={classes.listTextArea}
                primary={(
                    <span className={classes.firstTextLine}>
                        <p className={classes.productName}>{name}</p>
                        <p className={classes.price}>{`${priceWithCommas} won`}</p>
                    </span>
                )}
                secondary={(
                    <React.Fragment>
                        <Typography
                            component="span"
                            className={classes.secondTextLine}
                        >
                            <span className={classes.menuComment}>{comment}</span>
                        </Typography>
                    </React.Fragment>
                )}
            />
        </ListItemLink>
    );
};

export default withStyles(styles, { withTheme: true })(Menu);
