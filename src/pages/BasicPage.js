import React from 'react';
import Header from '../components/Header';
import MenuContainer from '../containers/menu/MenuContainer';
import Footer from '../components/Footer';

const BasicPage = () => {
    const totalPrice = 0;
    const showFooter = totalPrice !== 0;

    return (
        <div>
            <Header title="Menu" hideBackBtn />
            <MenuContainer showFooter={showFooter} />
            {showFooter ? <Footer totalPrice={totalPrice} /> : null}
        </div>
    );
};

export default BasicPage;
