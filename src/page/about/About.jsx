import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './about.scss';

export default function About() {
  return (
    <div className="main-about-sec">

        <div className="title-section">
            <h2>TITLE HERE</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Incidunt eum veritatis sequi vero voluptatem soluta 
                reprehenderit praesentium libero molestiae iure odit 
                cupiditate, earum sit!
            </p>
            <div>
                <FontAwesomeIcon className="icon" icon={faInstagram} />
                <FontAwesomeIcon className="icon" icon={faFacebook} />
                <FontAwesomeIcon className="icon" icon={faTwitter} />
                <FontAwesomeIcon className="icon" icon={faWhatsapp}/>
            </div>
        </div>

            <div className="list-section">
                <h2>ABOUT</h2>
                <ul>
                    <li>History</li>
                    <li>Our Team</li>
                    <li>Brand Guidelines</li>
                    <li>Terms &amp; Condition</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className="list-section">
                <h2>SERVICES</h2>
                <ul>
                    <li>How to Order</li>
                    <li>Our Product</li>
                    <li>Order Status</li>
                    <li>Promo</li>
                    <li>Payment Method</li>
                </ul>
            </div>

            <div className="list-section">
                <h2>OTHER</h2>
                <ul>
                    <li>Contact Us</li>
                    <li>Help</li>
                    <li>Privacy</li>
                </ul>
            </div>

    </div>
  )
}
