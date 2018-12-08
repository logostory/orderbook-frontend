import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

import arrowRightIcon from '../../images/baseline-chevron_right-24px.svg';

const Cart = ({ totalPrice, totalCount }) => (
  <div className={styles.bill}>
    <div className={styles.row}>
      <div className={styles.billTitle}>주문메뉴</div>
      <div className={styles.billContent}>{totalCount}</div>
    </div>
    <div className={styles.row}>
      <div className={styles.billTitle}>총 가격</div>
      <div className={styles.billContent}>{totalPrice}</div>
    </div>
  </div>
);

const Footer = ({ text }) => (
  <footer className={styles.footer}>
    <Cart />
    <div className={styles.next}>
      <span>
        {text}
        <img src={arrowRightIcon} alt="다음" />
      </span>
    </div>
  </footer>
);


Cart.propTypes = {
  totalCount: PropTypes.number,
  totalPrice: PropTypes.number,
};

Cart.defaultProps = {
  totalCount: 0,
  totalPrice: 0,
};

Footer.propTypes = {
  text: PropTypes.string,
};

Footer.defaultProps = {
  text: '주문하기',
};

export default Footer;
