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

/*
    로딩 바는 시작하고 나서 알아서 상승하도록 만들었습니다.

    모든 API의 로딩이 완료되고 나면 로딩바가 100%가 되고,
    이후 화면이 전환됩니다.
*/
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
        const { done, moveToNextPage } = this.props;

        // 로딩 바 100% 시 전환
        if (completed === 100) {
            moveToNextPage();
        } else {
            const diff = Math.random() * 10;
            this.setState({ completed: Math.min(completed + diff, 90) });
        }

        // API 호출 완료 시 로딩바 100%로
        if (done) {
            this.setState({ completed: 100 });
        }
    };

    render() {
        const { classes } = this.props;
        const { completed } = this.state;

        // Grid 부분은 제가 CSS를 잘 못해서 기존거 그냥 사용했습니다 :3
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
