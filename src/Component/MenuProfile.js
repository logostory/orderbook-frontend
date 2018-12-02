import React, { Component } from 'react';
import './MenuProfile.css'
import logo from '../Assets/logostory.jpg'

const MenuProfile = ({Picture, Title, Price, Discription, Options}) => {

    return (
        <React.Fragment>
            <div className="Cancle">X</div>
            <img className="Picture" src={Picture} />
            <div className="MenuInfo">
                <div className="MenuHeader">
                    <div className="Text Title"> {Title} </div>
                    <div className="Text Price"> {Price} 원 </div>
                </div>
                <div className="Text Discription"> {Discription} </div>
            </div>
            {Options.map((key) => {
                return (
                    <div className="OptionInfo">
                        <div className="OptionContents">
                            <input type="checkbox" />
                            <div className="Text">{key.title}</div>
                        </div>
                        <div className="OptionContents">
                            <div>+</div>
                            <div className="Text">{key.price}</div>
                        </div>
                    </div>
                )
            })}
        </React.Fragment>
    );
  }

export default MenuProfile;
