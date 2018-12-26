import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import {
    Fade, Grid, Typography, LinearProgress,
} from '@material-ui/core';

const styles = () => ({
    root: {
        marginTop: 140,
        height: `calc(100vh - 136px - ${/mobile/i.test(navigator.userAgent) ? 75 : 0}px)`,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '@media screen and (max-width: 360px) and (orientation: portrait)': {
        },
    },
    logo: {
        top: '-5rem',
        position: 'relative',
    },
});
const OuterGrid = withStyles({
    container: {
        position: 'absolute',
        width: '100%',
        bottom: '100px',
        display: 'flex',
        flexFlow: 'column',
        padding: '0 2rem',
        '@media screen and (max-width: 360px) and  (orientation: portrait)': {
            width: '360px',
        },
    },
})(Grid);

const InnerGrid = withStyles({
    item: {
        height: '72px',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.5',
        letterSpacing: '0.2px',
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.6)',
    },
})(Grid);

const LoadingTypo = withStyles({
    root: {
        width: '200px',
        height: '24px',
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.5',
        letterSpacing: '0.2px',
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.38)',
    },
})(Typography);

const LoadingBar = withStyles({
    root: {
        height: 4,
        backgroundColor: '#BFBFBF',
    },
    bar: {
        backgroundColor: '#3eafa2',
    },
})(LinearProgress);

class Loading extends React.Component {
    state = {
        completed: 0,
    };

    componentDidMount() {
        this.timer = setInterval(this.progress, 500);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    progress = () => {
        const { completed } = this.state;
        if (completed === 100) {
            this.setState({ completed: 0 });
        } else {
            const diff = Math.random() * 10;
            this.setState({ completed: Math.min(completed + diff, 100) });
        }
    };

    render() {
        const { classes, handleClick } = this.props;
        const { completed } = this.state;

        return (
            <div className={classes.root}>
                <Fade in timeout={1000}>
                    <img src="/loading_logo.svg" alt="Loading Logo" className={classes.logo} />
                </Fade>
                <Fade in timeout={1500}>
                    <OuterGrid container>
                        <InnerGrid item>
                            <LoadingTypo>Loading...</LoadingTypo>
                        </InnerGrid>
                        <LoadingBar variant="determinate" value={completed} />
                    </OuterGrid>
                </Fade>
            </div>
        );
    }
}

export default withStyles(styles)(Loading);
