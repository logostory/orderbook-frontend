import React from 'react';
import Loading from 'components/Loading';

// const LoadingPage = () => <Loading />;

class LoadingPage extends React.Component {
    handleClick = (e) => {
        console.log(e.target.tagName);
        e.target.blur();
    }

    render() {
        const { handleClick } = this;
        return (<Loading handleClick={handleClick} />);
    }
}

export default LoadingPage;
