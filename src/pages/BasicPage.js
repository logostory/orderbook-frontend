import React from 'react';
import Header from '../components/Header';
import MenuContainer from '../containers/menu/MenuContainer';
import Footer from '../components/Footer';

const BasicPage = () => (
    <div>
        <Header title="Menu" hideBackBtn />
        <MenuContainer />
        <Footer totalPrice={9000} />
    </div>
);

export default BasicPage;
