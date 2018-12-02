import React from 'react';
import logo from './logo.svg';
import './App.css';
import StoreProfile from './Component/StoreProfile';
import MenuPfofile from './Component/MenuProfile';

import picture from './Assets/logostory.jpg'

const App = () => (
  <div className="App">
      <StoreProfile Picture={picture} Title="Logostory" TableNum="17" />
      <MenuPfofile Picture={picture} Title="LogoStory Menu" Price="5000" Discription="상세설명" Options={[{'title' : '1번옵션', 'price' : '5000'}, {'title' : '2번옵션', 'price' : '3000'}]} />
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit
        <code>src/App.js</code>
        and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default App;
