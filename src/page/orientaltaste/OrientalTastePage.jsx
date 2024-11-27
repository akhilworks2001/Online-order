import React from 'react';
import './orientalTastePage.scss'

import DesignImg from '../../images/landing page/design.png';
import OrderImg from '../../images/Order.png';

const OrientalTastePage = function () {

    return (
        <div className="main-oriental">

            <img className="main-img" src={DesignImg} alt="" />

            <div className="main-block">
                <img src={OrderImg} alt="" />
                <div>
                    <h1>Oriental Taste</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ratione nihil tempora vero aliquam, ipsam totam?
                    </p>
                    <button>ORDER NOW</button>
                </div>
            </div>

        </div>
    );

};

export default OrientalTastePage;