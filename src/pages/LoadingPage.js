import React from 'react';
import Loading from 'components/Loading';
import { withRouter } from 'react-router-dom';
// const LoadingPage = () => <Loading />;

class LoadingPage extends React.Component {
    handleClick = (e) => {
        const { history } = this.props;
        history.push('/basic');
    }

    render() {
        const { handleClick } = this;
        return (<Loading handleClick={handleClick} />);
    }
}

export default withRouter(LoadingPage);
