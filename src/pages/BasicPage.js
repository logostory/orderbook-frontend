import React from 'react';
import Header from '../components/Header';
import StoreProfile from '../components/StoreProfile';
import MenuProfile from '../components/MenuProfile';
import MenuContainer from '../containers/menu/MenuContainer';
import Footer from '../components/Footer';

import Image from '../Assets/logostory.jpg';

const BasicPage = () => (
    <div>
        <Header />
        <StoreProfile Image={Image} Table="TABLE 17" Title="The Burgur Co" />
        <MenuProfile Image={Image} Menu={{ Title: 'Cheeseburger', Description: 'Angus beef patty with creamy cheese, crispy lettuce, red...', Price: '6,500' }} Options={[{ title: 'title1', price: 'price1' }, { title: 'title2', price: 'pricw2' }, { title: 'title2', price: 'pricw2' }, { title: 'title2', price: 'pricw2' }, { title: 'title2', price: 'pricw2' }, { title: 'title2', price: 'pricw2' }, { title: 'title2', price: 'pricw2' }, { title: 'title2', price: 'pricw2' }, { title: 'title2', price: 'pricw2' }]} />
        <MenuContainer />
        <Footer />
    </div>
);

export default BasicPage;
