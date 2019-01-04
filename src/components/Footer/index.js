import React from 'react';
import styles from './styles.module.css';

const Footer = ({
    totalPrice = 0,
    text = 'VIEW MY ORDER',
    onClick = f => f,
}) => (
    <footer className={styles.footer}>
        <div className={styles.textContainer}>
            <span>TOTAL</span>
            <span className={styles.moneyText}>{`${totalPrice} WON`}</span>
        </div>
        <button className={styles.button} type="button" onClick={onClick}>{text.toUpperCase()}</button>
    </footer>
);

export default Footer;
