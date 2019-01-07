import React from 'react';
import { withRouter } from 'react-router-dom';

import arrowLeftIcon from 'Assets/left-chevron.svg';
import menuIcon from 'Assets/hamburger.svg';
import styles from './styles.module.css';

const Header = ({ title = '', hideBackBtn = false, history }) => {
    if (hideBackBtn) {
        return (
            <header className={styles.header}>
                <img src={menuIcon} alt="메뉴" />
                <div>{title}</div>
                <div
                    style={{
                        visibility: 'hidden',
                        width: 24,
                        height: 24,
                    }}
                />
            </header>
        );
    }

    return (
        <header className={styles.header}>
            <img
                src={arrowLeftIcon}
                alt="뒤로 가기"
                onClick={() => history.goBack()}
            />
            <div>{title}</div>
            <img src={menuIcon} alt="메뉴" />
        </header>
    );
};

export default withRouter(Header);
