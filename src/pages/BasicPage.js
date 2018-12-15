import React from 'react';
import Header from '../components/Header';
import StoreProfile from '../components/StoreProfile';
import MenuContainer from '../containers/menu/MenuContainer';
import Footer from '../components/Footer';

import Image from '../Assets/logostory.jpg';

const BasicPage = () => (
    <div>
        <Header />
        <StoreProfile Image={Image} Table="TABLE 17" Title="The Burgur Co" />
        <MenuContainer />
        <Footer />
    </div>
);

export default BasicPage;
