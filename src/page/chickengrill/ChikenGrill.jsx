import React from 'react';
import './chickenGrill.scss';
import ChickenGrillImg from '../../images/Product.png'
import DesignImg from '../../images/landing page/design.png';

export default function ChikenGrill() {

  return (

    <div>
        <div className="main-chickengrill">

            <img className="main-img" src={DesignImg} alt="" />

            <div className="main-block">
                <div>
                    <h1>Oriental Taste</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ratione nihil tempora vero aliquam, ipsam totam?
                    </p>
                    <button>ORDER NOW</button>
                </div>

                <img src={ChickenGrillImg} alt="" />
            </div>

    </div>

    </div>

  )

}
