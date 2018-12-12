import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Fade } from '@material-ui/core';
import logoTemp from 'Assets/svg/logo-temp.svg';
// import { Redirect } from 'react-router-dom';
import StartDisplay from 'components/StartDisplay';
import Keyframes from './keyframes.css';

const styles = theme => ({
    root: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [`@media screen and (max-width: 360px) and  (orientation: portrait)`]: {
            width: '360px',
        },
    },
    logo: {

    },
    movelogo: {
        top: '-200px',
        position: 'relative',
        animationName: 'example',
        animationDuration: '0.5s',
    },
});

class Loading extends React.Component {
    state = {
        loaded: false,
    }

    componentDidMount() {
        setTimeout(() => this.setState({ loaded: true }), 1500);
    }

    render() {
        const { classes } = this.props;
        const { loaded } = this.state;

        return (
            <div className={classes.root}>
                <Fade in timeout={{ enter: 1000 }}>
                    <img src={`${logoTemp}`} alt="" className={classes[loaded ? 'movelogo' : 'logo']} />
                </Fade>
                { loaded && <StartDisplay />}
            </div>
        );
    }
}

export default withStyles(styles)(Loading);
