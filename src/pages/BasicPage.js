import React from 'react';
import Header from '../components/Header';
import MenuContainer from '../containers/menu/MenuContainer';
import Footer from '../components/Footer';

import Image from '../Assets/logostory.jpg';

const BasicPage = () => (
    <div>
        <Header />
        <MenuContainer />
        <Footer />
    </div>
);

export default BasicPage;
