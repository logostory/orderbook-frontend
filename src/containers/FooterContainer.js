import React from 'react';
import { connect } from 'react-redux';
import Footer from 'components/Footer/index';
import { showFooter, getTotalPrice } from 'modules/Cart';

const FooterContainer = ({
    showFooter, totalPrice, text, onClick,
}) => <Footer totalPrice={totalPrice} text={text} onClick={onClick} />;

const mapStateToProps = state => ({
    showFooter: showFooter(state),
    totalPrice: getTotalPrice(state),
});

export default connect(mapStateToProps)(FooterContainer);
