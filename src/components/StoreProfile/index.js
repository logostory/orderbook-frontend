import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'spaceBetween',
        boxShadow: 'none',
        marginLeft: '16px',
        marginRight: '16px',
    },
    imageCard: {
        display: 'flex',
        justifyContent: 'center',
        boxShadow: 'none',
    },
    image: {
        width: 'calc(100% - 16px)',
        minHeight: '150px',
        margin: '8px',
        maxHeight: '160px',
        maxWidth: '400px',
        background: 'white',
    },
    table: {
        marginBottom: '8px',
        fontFamily: 'Roboto',
        fontSize: '12px',
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.33,
        letterSpacing: '2px',
        color: 'rgba(0, 0, 0, 0.87)',
    },
    title: {
        marginBottom: '21px',
        fontFamily: 'Roboto',
        fontSize: '20px',
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: '0.3px',
        color: 'rgba(0, 0, 0, 0.87)',
    },
};

const StoreProfile = ({
    classes, Image, Table, Title,
}) => (
    <React.Fragment>
        <Card className={classes.imageCard}>
            <img className={classes.image} src={Image} alt="storeProfile" />
        </Card>
        <Card className={classes.card}>
            <Typography className={classes.table} variant="overline">
                {Table}
            </Typography>
            <Typography className={classes.title} variant="h6">
                {Title}
            </Typography>
        </Card>

    </React.Fragment>
);

StoreProfile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StoreProfile);
