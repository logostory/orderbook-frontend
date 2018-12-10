import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import arrowLeftIcon from '../../images/baseline-chevron_left-24px.svg';
import menuIcon from '../../images/baseline-menu-24px.svg';

const Header = ({ title }) => (
  <header className={styles.header}>
    <div className={styles.backBtn}><img src={arrowLeftIcon} alt="뒤로 가기" /></div>
    <div className={styles.title}>{title}</div>
    <div className="menu"><img src={menuIcon} alt="메뉴" /></div>
  </header>
);

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: 'Menu',
};

export default Header;
