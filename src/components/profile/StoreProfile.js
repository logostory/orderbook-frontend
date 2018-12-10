import React, { Component } from 'react';
import './StoreProfile.css'
import logo from '../../Assets/logostory.jpg'

const StoreProfile = ({Picture, Title, TableNum}) => {

    return (
        <React.Fragment>
            <img className="Picture" src={logo} />
            <div className="StoreInfo">
                <div className="Text"> {Title} </div>
                <div className="Text"> {TableNum}번 테이블 </div>
            </div>
        </React.Fragment>
    );
  }

export default StoreProfile;
