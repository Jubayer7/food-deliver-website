import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="row footer ">
            <div className="col-6 follow ">
                <h5>Follow Us</h5>

                <i class="fab fa-facebook"></i>
                <i class="fab fa-youtube"></i>
                <i class="fab fa-twitter-square"></i>
                <i class="fab fa-google-plus-g"></i>
            </div>
            <div className="col-6  contact">

                <h5>Contact</h5>
                < p><span>  <i class="fas fa-home"></i></span> Bangladesh, Dhaka</p>

                <i class="fas fa-phone"></i>
                <p>01834239847</p>
                <i class="fas fa-envelope"></i>
                <p>sonni@gmail.com</p>
            </div>
            <div className="copyright">
                <p >	&copy; 2021 Copyright: Foodservice.com</p>
            </div>


        </div>
    );
};

export default Footer;