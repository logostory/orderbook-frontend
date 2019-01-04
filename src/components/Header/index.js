import React from 'react';
import styles from './styles.module.css';
import arrowLeftIcon from '../../images/baseline-chevron_left-24px.svg';
import menuIcon from '../../images/baseline-menu-24px.svg';

const Header = ({ title = '', hideBackBtn = false }) => {
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
            <img src={arrowLeftIcon} alt="뒤로 가기" />
            <div>{title}</div>
            <img src={menuIcon} alt="메뉴" />
        </header>
    );
};

export default Header;
