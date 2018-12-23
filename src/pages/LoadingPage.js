import React from 'react';
import Loading from 'components/Loading';
import { withRouter } from 'react-router-dom';
// const LoadingPage = () => <Loading />;

class LoadingPage extends React.Component {
    handleClick = (e) => {
        /*
        라우트로 설정한 컴포넌트는, history, location, match 3가지의 props 를 전달받게 됩니다:
        이중에서 history 이 객체의 push, replace 를 통해 다른 경로로 이동하거나 앞 뒤 페이지로 전환 할 수 있습니다.
        이 Loading 페이지에서는 Router를 통해서 로딩페이지가 '/basic' 페이지로 이동하는 링크를 만들기 위해서 .push를 사용합니다.
        */
        const { history } = this.props;
        history.push('/basic');
    }

    render() {
        const { handleClick } = this;
        return (<Loading handleClick={handleClick} />);
    }
}

// ?? Loading page에서만 withRouter를 사용해서 export한 이유가 있나요?
/*
https://velopert.com/3417
https://reacttraining.com/react-router/web/api/withRouter
*/

export default withRouter(LoadingPage);
