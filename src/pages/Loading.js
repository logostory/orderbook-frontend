import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Fade from '@material-ui/core/Fade';
import logoTemp from 'Assets/svg/logo-temp.svg';
import { Redirect } from 'react-router-dom';

const styles = theme => ({
    root: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        // filter: 'drop-Shadow( 15px 15px 15px #000)',
        // boxShadow: '5px 5px 5px #000',
    },
});

class Loading extends React.Component {
    state = {
        redirect: false
    }

    componentDidMount() {
        setTimeout(() => this.setState({ redirect: true }), 1500);
    }

    render() {
        const { classes } = this.props;
        const { redirect } = this.state;
        if (redirect) return <Redirect to="/basic" />;
        return (
            <div className={classes.root}>
                <Fade in timeout={2500}>
                    <img src={`${logoTemp}`} alt="" className={classes.logo} />
                </Fade>
            </div>
        );
    }
}

export default withStyles(styles)(Loading);
