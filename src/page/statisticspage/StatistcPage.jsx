import React from 'react'
import './statisticPage.scss'
import VegImg  from '../../images/landing page/4.png';
import CapcicumImg  from '../../images/landing page/5.png';
import CorainderImg  from '../../images/landing page/3.png';
import GarlicImg  from '../../images/landing page/garlic.png';
import OnionImg  from '../../images/landing page/Onion.png';
import TomatoImg  from '../../images/landing page/tomato.png';

const StatisticPage = function () {

  

  return (
    <div className="main-statisics">

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

      <div className="list-state">

        <div>
          <h1>123</h1>
          <h2>OUTLETS</h2>
        </div>

        <div>
          <h1>100</h1>
          <h2>CHEF</h2>
        </div>

        <div>
          <h1>300</h1>
          <h2>MENU</h2>
        </div>

        <div>
          <h1>30</h1>
          <h2>COUNTRY</h2>
        </div>

      </div>

    </div>
  )
}

export default StatisticPage;