import React from 'react';
import { showFooter } from 'modules/Cart';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MenuContainer from '../containers/menu/MenuContainer';
import FooterContainer from '../containers/FooterContainer';

const BasicPage = ({ history, showFooter }) => (
    <div>
        <Header title="Menu" hideBackBtn />
        <MenuContainer showFooter={showFooter} />
        {showFooter ? (
            <FooterContainer
                text="VIEW MY CART"
                onClick={() => history.push('/cart')}
            />
        ) : null}
    </div>
);

const mapStateToProps = state => ({
    showFooter: showFooter(state),
});

export default connect(mapStateToProps)(BasicPage);
