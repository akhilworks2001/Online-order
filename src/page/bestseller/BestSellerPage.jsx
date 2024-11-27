import { React } from "react";
import FirstDishImg from "../../images/Product.png";
import SecondDishImg from "../../images/Product2.png";
import ThirdDishImg from "../../images/Product3.png";
import './bestSellerPage.scss';

const BestSellerPage = function () {

    return (

        <div className="main-bestseller">

            <h1 className="main-title">Best Seller</h1>
            <p className="main-about">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Aliquam, ipsam? Rem assumenda itaque inventore.
            </p>

            <div className="main-cards">

                <div className="card">
                    <img className="card-img" src={FirstDishImg} alt="" />
                    <h3 className="card-title">Title Here</h3>
                    <p className="card-about">
                        Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Maiores, asperiores?
                    </p>
                </div>

                <div className="card">
                    <img className="card-img" src={SecondDishImg} alt="" />
                    <h3 className="card-title">Title Here</h3>
                    <p className="card-about">
                    Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Maiores, asperiores?
                    </p>
                </div>

                <div className="card">
                    <img className="card-img" src={ThirdDishImg} alt="" />
                    <h3 className="card-title">Title Here</h3>
                    <p className="card-about">
                    Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Maiores, asperiores?
                    </p>
                </div>

            </div>

        </div>
    );
};

export default BestSellerPage;