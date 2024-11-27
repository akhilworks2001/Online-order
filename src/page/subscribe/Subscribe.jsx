import React from 'react'
import './Subscribe.scss';
import VegImg  from '../../images/landing page/4.png';
import CapcicumImg  from '../../images/landing page/5.png';
import CorainderImg  from '../../images/landing page/3.png';
import GarlicImg  from '../../images/landing page/garlic.png';
import OnionImg  from '../../images/landing page/Onion.png';
import TomatoImg  from '../../images/landing page/tomato.png';


export default function Subscribe() {
  return (
    <div className="main-subscribe">

      <img className="veg-img-1" src={VegImg} alt="" />
      <img className="veg-img-2" src={VegImg} alt="" />
      <img className="veg-img-3" src={VegImg} alt="" />
      <img className="capcicum-img" src={CapcicumImg} alt="" />
      <img className="capcicum-2-img" src={CapcicumImg} alt="" />
      <img className="onion-img" src={OnionImg} alt="" />
      <img className="tomato-img" src={TomatoImg} alt="" />
      <img className="corainder-img" src={CorainderImg} alt="" />
      <img className="garlic-img" src={GarlicImg} alt="" />

      <h1 className="main-heading">Statistics</h1>
      <p className="main-about">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Earum tempore consectetur animi maxime, cum illum!
      </p>

      <div className="subscribe-input" >

        <input type="text"  placeholder="Your Email"/>
        <button>SUBSCRIBE</button>
        
      </div>

    </div>
  )
};
