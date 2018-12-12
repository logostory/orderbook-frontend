import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

const styles = theme => ({
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
    flex: 3,
    width: 160,
    height: 24,
    fontFamily: 'Roboto',
    lineHeight: 1.5,
    letterSpacing: 0.2,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  price: {
    margin: 0,
    padding: 0,
    flex: 1,
    textAlign: 'right',
    width: 80,
    height: 16,
    fontSize: 12,
    fontFamily: 'Roboto',
    lineHeight: 1.33,
    letterSpacing: 0.4,
    color: 'rgba(0,0,0,0.87)',
    marginTop: 5,
    marginBottom: 3
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
  }
});

const ListItemLink = props => <ListItem button component="a" {...props} />;

const Menu = ({product, classes, onClick}) => {
  const {productName, productPrice, categoryId, productId, productImage, menuComment} = product;
  return (
    <ListItemLink onClick={() => onClick(productId)}>
      <ListItemAvatar>
        <Avatar className={classes.avatar} alt="Remy Sharp" src={productImage}/>
      </ListItemAvatar>
      <ListItemText
        className={classes.listTextArea}
        primary={(<span className={classes.firstTextLine}>
        <p className={classes.productName}>{productName}</p>
        <p className={classes.price}>{`${productPrice} won`}</p>
      </span>)}
        secondary={(
          <React.Fragment>
            <Typography component="span" className={classes.secondTextLine}>
              {/*menuComment 추가 되면 수정 */}
              {/*<p>{menuComment}</p>*/}
              <p className={classes.menuComment}>메뉴설명</p>
            </Typography>
          </React.Fragment>
        )}
      />
    </ListItemLink>
  );
};

export default withStyles(styles, {withTheme: true})(Menu);
