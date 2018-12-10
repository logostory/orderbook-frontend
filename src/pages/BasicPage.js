import React from 'react';
import Header from '../components/Header';
import StoreProfile from '../components/profile/StoreProfile';
import MenuContainer from '../containers/menu/MenuContainer';
import Footer from '../components/Footer';

const BasicPage = () => (
    <div>
        <Header />
        <StoreProfile />
        <MenuContainer />
        <Footer />
    </div>
);

export default BasicPage;
